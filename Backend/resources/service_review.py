from flask_restful import Resource, reqparse
from db import *
import json
import datetime
from json import JSONEncoder


class ServiceReview(Resource):
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

    def get(self, id):
        query = f"""SELECT ci.customer_id, ci.first_name, ci.last_name,
                        srq.service_question, r.r_category, e.e_first_name,
                        e.e_last_name, e.emp_id, sr.date_time
                        FROM service_review as sr
                        JOIN service_review_question as srq
                        ON sr.service_review_question_id = srq.service_review_question_id
                        JOIN rating as r 
                        ON sr.rating_id = r.rating_id 
                        JOIN customer_info as ci
                        ON sr.customer_id = ci.customer_id 
                        LEFT JOIN employee as e
                        ON sr.emp_id = e.emp_id
                        WHERE ci.customer_id = '{id}'
                        ORDER BY ci.customer_id"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['date_time'] != None:
                i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
        if res:
            return {"service review": res}, 200
        return {'message': 'record not found'}, 404

    def post(self):
        data = ServiceReview.parser.parse_args()
        # get input data
        insert = f"INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id) \
        VALUES('{data['question_id']}', '{data['rating_id']}', '{data['emp_id']}', '{data['customer_id']}')"

        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        pass

    def put(self, id):
        pass


class ServiceReviewList(Resource):
    def get(self):
        query = """SELECT ci.customer_id, ci.first_name, ci.last_name,
                    srq.service_question, r.r_category, e.e_first_name,
                    e.e_last_name, e.emp_id, sr.date_time
                    FROM service_review as sr
                    JOIN service_review_question as srq
                    ON sr.service_review_question_id = srq.service_review_question_id
                    JOIN rating as r 
                    ON sr.rating_id = r.rating_id 
                    JOIN customer_info as ci
                    ON sr.customer_id = ci.customer_id 
                    LEFT JOIN employee as e
                    ON sr.emp_id = e.emp_id 
                    ORDER BY ci.customer_id"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['date_time'] != None:
                i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
        return {"service review": res}
