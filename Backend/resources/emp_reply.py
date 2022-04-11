from flask_restful import Resource, reqparse
from db import *
import json
import datetime
from json import JSONEncoder


class EmployeeReply(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('emp_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    parser.add_argument('customer_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    parser.add_argument('responses',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    def get(self, id):
        query = f"""SELECT e.emp_id, e.e_first_name, e.e_last_name,
                    ci.first_name c_first, ci.last_name c_last, er.responses, er.date_time
                    FROM employee_reply as er
                    JOIN employee as e
                    ON er.emp_id = e.emp_id
                    JOIN customer_info as ci
                    ON er.customer_id = ci.customer_id
                    WHERE e.emp_id = '{id}'"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['date_time'] != None:
                i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
        if res:
            return {"employee reply": res}, 200
        return {'message': 'record not found'}, 404

    def post(self):
        data = EmployeeReply.parser.parse_args()
        # get input data
        insert = f"INSERT INTO employee_reply(emp_id, customer_id, responses) \
        VALUES('{data['emp_id']}', '{data['customer_id']}', '{data['responses']}')"

        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        pass

    def put(self, id):
        pass


class EmployeeReplyList(Resource):
    def get(self):
        query = """SELECT e.emp_id, e.e_first_name, e.e_last_name,
                    ci.first_name c_first, ci.last_name c_last, er.responses, er.date_time
                    FROM employee_reply as er
                    JOIN employee as e
                    ON er.emp_id = e.emp_id
                    JOIN customer_info as ci
                    ON er.customer_id = ci.customer_id"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['date_time'] != None:
                i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
        return {"service review": res}
