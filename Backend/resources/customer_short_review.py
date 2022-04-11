from flask_restful import Resource, reqparse
from db import *
import json
import datetime
from json import JSONEncoder


class CustomerShortReview(Resource):
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
                    srq.short_question, r.r_category, csr.comment, csr.date_time
                    FROM customer_short_review as csr
                    JOIN short_review_question as srq
                    ON csr.short_review_id = srq.short_review_id 
                    JOIN rating as r
                    ON csr.rating_id = r.rating_id 
                    JOIN customer_info as ci
                    ON csr.customer_id = ci.customer_id 
                    WHERE ci.customer_id = '{id}'"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['date_time'] != None:
                i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
        if res:
            return {"short review": res}, 200
        return {'message': 'record not found'}, 404

    def post(self):
        data = CustomerShortReview.parser.parse_args()
        # get input data
        insert = f"INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) \
        VALUES('{data['question_id']}', '{data['rating_id']}', '{data['customer_id']}')"

        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        pass

    def put(self, id):
        pass


class CustomerShortReviewList(Resource):
    def get(self):
        query = """SELECT ci.customer_id, ci.first_name, ci.last_name,
                    srq.short_question, r.r_category, csr.comment, csr.date_time
                    FROM customer_short_review as csr
                    JOIN short_review_question as srq
                    ON csr.short_review_id = srq.short_review_id 
                    JOIN rating as r
                    ON csr.rating_id = r.rating_id 
                    JOIN customer_info as ci
                    ON csr.customer_id = ci.customer_id """
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['date_time'] != None:
                i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
        return {"service review": res}
