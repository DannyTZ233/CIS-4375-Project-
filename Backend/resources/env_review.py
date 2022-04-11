from flask_restful import Resource, reqparse
from db import *


class EnvironmentReivew(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('question_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    parser.add_argument('rating_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    parser.add_argument('customer_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    def get(self, id):
        query = f"""SELECT ci.customer_id, ci.first_name, ci.last_name,
                    erq.env_question, r.r_category, er.date_time
                    FROM environment_review as er
                    JOIN environment_review_question as erq
                    ON er.environment_review_question_id = erq.environment_review_question_id
                    JOIN rating as r
                    ON er.rating_id = r.rating_id
                    JOIN customer_info as ci
                    ON er.customer_id = ci.customer_id 
                    WHERE ci.customer_id = '{id}'
                    ORDER BY ci.customer_id
                    """
        res = execute_read_query_dict(db_conn, query)
        if res:
            for i in res:
                if i['date_time'] != None:
                    i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
            return {"environment review": res}, 200
        return {'message': 'record not found'}, 404

    def post(self):
        data = EnvironmentReivew.parser.parse_args()
        # get input data
        insert = f"INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) \
        VALUES('{data['question_id']}', '{data['rating_id']}', '{data['customer_id']}')"

        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        pass

    def put(self, id):
        pass


class EnvironmentReivewList(Resource):
    def get(self):
        query = """SELECT ci.customer_id, ci.first_name, ci.last_name,
                    erq.env_question, r.r_category, er.date_time
                    FROM environment_review as er
                    JOIN environment_review_question as erq
                    ON er.environment_review_question_id = erq.environment_review_question_id
                    JOIN rating as r
                    ON er.rating_id = r.rating_id
                    JOIN customer_info as ci
                    ON er.customer_id = ci.customer_id 
                    ORDER BY ci.customer_id"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['date_time'] != None:
                i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
        return {"service review": res}
