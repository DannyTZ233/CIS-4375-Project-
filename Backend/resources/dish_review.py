from flask_restful import Resource, reqparse
from db import *
import json
import datetime
from json import JSONEncoder


class DishReview(Resource):
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

    parser.add_argument('dish_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    def get(self, id):
        query = f"""SELECT ci.customer_id, ci.first_name, ci.last_name,
                    drq.dish_question, r.r_category, d.dish_name, dr.date_time
                    FROM dish_review as dr
                    JOIN dish_review_question as drq
                    ON dr.dish_review_question_id = drq.dish_review_question_id
                    JOIN rating as r
                    ON dr.rating_id = r.rating_id 
                    LEFT JOIN dish as d
                    ON dr.dish_id = d.dish_id
                    JOIN customer_info as ci
                    ON dr.customer_id = ci.customer_id 
                    WHERE ci.customer_id = '{id}'"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['date_time'] != None:
                i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
        if res:
            return {"environment review": res}, 200
        return {'message': 'record not found'}, 404

    def post(self):
        data = DishReview.parser.parse_args()
        # get input data
        insert = f"INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) \
        VALUES('{data['question_id']}', '{data['rating_id']}', '{data['dish_id']}', '{data['customer_id']}')"

        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        pass

    def put(self, id):
        pass


class DishReviewList(Resource):
    def get(self):
        query = """SELECT ci.customer_id, ci.first_name, ci.last_name,
                    drq.dish_question, r.r_category, d.dish_name, dr.date_time
                    FROM dish_review as dr
                    JOIN dish_review_question as drq
                    ON dr.dish_review_question_id = drq.dish_review_question_id
                    JOIN rating as r
                    ON dr.rating_id = r.rating_id 
                    LEFT JOIN dish as d
                    ON dr.dish_id = d.dish_id
                    JOIN customer_info as ci
                    ON dr.customer_id = ci.customer_id """
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['date_time'] != None:
                i['date_time'] = i['date_time'].strftime("%m/%d/%Y")
        return {"service review": res}
