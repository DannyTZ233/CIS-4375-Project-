from flask_restful import Resource, reqparse
from db import *


class DishReviewQuestion(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('question',
                        type=str,
                        # required=True,
                        help="required"
                        )

    def get(self, id):
        query = f"SELECT * FROM dish_review_question WHERE dish_review_question_id= '{id}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"question ": res}, 200
        return {'message': 'question not found'}, 404

    def post(self):
        data = DishReviewQuestion.parser.parse_args()
        question = data['question']
        query = f"SELECT * FROM dish_review_question WHERE dish_question='{question.lower()}'"
        res = execute_read_query(db_conn, query)
        print(res)
        if res:
            return {'message': "A question with name '{}' already exists.".format(question)}, 400

        # get input data
        insert = f"INSERT INTO dish_review_question(dish_question) VALUES('{question}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        query = f"SELECT * FROM dish_review_question WHERE dish_review_question_id='{id}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM dish_review_question WHERE dish_review_question_id = '{id}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'question not found'}, 404
        return {'message': 'record deleted'}


class DishReviewQuestionList(Resource):
    def get(self):
        query = 'SELECT * FROM dish_review_question'
        res = execute_read_query_dict(db_conn, query)
        return {'questions': res}, 200
