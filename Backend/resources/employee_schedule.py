from datetime import date
from flask_restful import Resource, reqparse
from db import *


class EmployeeSchedule(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('check_in_time',
                        type=str,
                        # required=True,
                        help="required"
                        )

    parser.add_argument('emp_id',
                        type=str,
                        # required=True,
                        help="required"
                        )
    parser.add_argument('log_date',
                        type=str,
                        # required=True,
                        help="required"
                        )
    parser.add_argument('leave_id',
                        type=str,
                        required=False,
                        help="optional"
                        )
    parser.add_argument('check_out_time',
                        type=str,
                        required=False,
                        help="optional"
                        )

    def get(self, id):
        query = f"""SELECT e.emp_id, e.e_first_name, e.e_last_name, jt.jt_category,
                    eci.eci_category, eco.eco_category, el.el_category,
                    es.log_datetime
                    FROM employee_schedule as es
                    LEFT JOIN employee_check_in as eci
                    ON es.check_in_id = eci.check_in_id
                    LEFT JOIN employee_check_out as eco
                    ON es.check_out_id = eco.check_out_id
                    JOIN employee as e
                    ON es.emp_id = e.emp_id
                    LEFT JOIN employee_leave as el
                    ON es.leave_id = el.leave_id
                    JOIN job_title as jt
                    ON e.job_title_id = jt.job_title_id 
                    WHERE e.emp_id = '{id}'"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['log_datetime'] != None:
                i['log_datetime'] = i['log_datetime'].strftime("%m/%d/%Y")
        if res:
            return {"employee schedules": res}, 200
        return {'message': 'type not found'}, 404



    def post(self):
        data = EmployeeSchedule.parser.parse_args()
        # get input data
        for k, v in data.items():
            if data[k] is None:
                data[k] = "null"

        insert = f"INSERT INTO employee_schedule(emp_id, check_in_time, leave_id, check_out_time) \
        VALUES({data['emp_id']}, {data['check_in_time']}, {data['leave_id']}, {data['check_out_time']})"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        pass

    def put(self):
        data = EmployeeSchedule.parser.parse_args()
        # get input data
        for k, v in data.items():
            if data[k] is None:
                data[k] = "null"

        insert = f"UPDATE employee_schedule SET {data['check_out_time']} WHERE {data['emp_id']} and Date(log_datetime) = current_date()"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200


class EmployeeScheduleList(Resource):
    def get(self):
        query = """SELECT e.emp_id, e.e_first_name, e.e_last_name, jt.jt_category,
                eci.eci_category, eco.eco_category, el.el_category,
                es.log_datetime
                FROM employee_schedule as es
                LEFT JOIN employee_check_in as eci
                ON es.check_in_id = eci.check_in_id
                LEFT JOIN employee_check_out as eco
                ON es.check_out_id = eco.check_out_id
                JOIN employee as e
                ON es.emp_id = e.emp_id
                LEFT JOIN employee_leave as el
                ON es.leave_id = el.leave_id
                JOIN job_title as jt
                ON e.job_title_id = jt.job_title_id """
        res = execute_read_query_dict(db_conn, query)
        #print(res[0]['log_datetime'])
        for i in res:
            if i['log_datetime'] != None:
                i['log_datetime'] = i['log_datetime'].strftime(
                    "%m/%d/%Y, %H:%M:%S ")
        return {"employees": res}
