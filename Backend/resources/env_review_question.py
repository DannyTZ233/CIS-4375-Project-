from flask_restful import Resource, reqparse
from db import *


class EnvironmentReviewQuestion(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('question',
                        type=str,
                        # required=True,
                        help="required"
                        )
    parser.add_argument('environment_review_question_id',
                        type=str,
                        # required=True,
                        help="required"
                        )

    def get(self, id):
        query = f"SELECT * FROM environment_review_question WHERE environment_review_question_id= '{id}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"question ": res}, 200
        return {'message': 'question not found'}, 404

    def post(self):
        data = EnvironmentReviewQuestion.parser.parse_args()
        question = data['question']
        query = f"SELECT * FROM environment_review_question WHERE env_question='{question.lower()}'"
        res = execute_read_query(db_conn, query)
        print(res)
        if res:
            return {'message': "A question with name '{}' already exists.".format(question)}, 400

        # get input data
        insert = f"INSERT INTO environment_review_question(env_question) VALUES('{question}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        query = f"SELECT * FROM environment_review_question WHERE environment_review_question_id='{id}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM environment_review_question WHERE environment_review_question_id = '{id}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'question not found'}, 404
        return {'message': 'record deleted'}

    def put(self):
        data = EnvironmentReviewQuestion.parser.parse_args()
        query = f"SELECT * FROM environment_review_question WHERE environment_review_question_id= '{data['environment_review_question_id']}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            update_query = f"""
                UPDATE environment_review_question
                SET env_question = '{data['question']}'
                WHERE environment_review_question_id = '{data['environment_review_question_id']}'
            """
            execute_query(db_conn, update_query)
            return {"message": "record updated"}, 201
        return {"message": "record not found"}, 404


class EnvironmentReviewQuestionList(Resource):
    def get(self):
        query = 'SELECT * FROM environment_review_question'
        res = execute_read_query_dict(db_conn, query)
        return {'questions': res}, 200
