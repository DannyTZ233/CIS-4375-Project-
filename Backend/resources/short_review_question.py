from flask_restful import Resource, reqparse
from db import *


class ShortReviewQuestion(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('question',
                        type=str,
                        # required=True,
                        help="required"
                        )

    def get(self, id):
        query = f"SELECT * FROM short_review_question WHERE short_review_id= '{id}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"question ": res}, 200
        return {'message': 'question not found'}, 404

    def post(self):
        data = ShortReviewQuestion.parser.parse_args()
        question = data['question']
        query = f"SELECT * FROM short_review_question WHERE short_question='{question.lower()}'"
        res = execute_read_query(db_conn, query)
        print(res)
        if res:
            return {'message': "A question with name '{}' already exists.".format(question)}, 400

        # get input data
        insert = f"INSERT INTO short_review_question(short_question) VALUES('{question}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        query = f"SELECT * FROM short_review_question WHERE short_review_id='{id}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM short_review_question WHERE short_review_id = '{id}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'question not found'}, 404
        return {'message': 'record deleted'}

    def put(self, id):
        data = ShortReviewQuestion.parser.parse_args()
        question = data['question']
        query = f"SELECT * FROM short_review_question WHERE short_review_id= '{id}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            update_query = f"UPDATE short_review_question SET short_question='{question}' WHERE short_review_id ='{id}'"
            execute_query(db_conn, update_query)
        else:
            insert_query = f"INSERT INTO short_review_question(short_question) VALUES ('{question}')"
            execute_query(db_conn, insert_query)
        return {'message': 'recard updated'}, 201


class ShortReviewQuestionList(Resource):
    def get(self):
        query = 'SELECT * FROM short_review_question'
        res = execute_read_query_dict(db_conn, query)
        return {'questions': res}, 200
