
from flask_restful import Resource, reqparse
from db import *


class Rating(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('category',
                        type=str,
                        # required=True,
                        help="required"
                        )

    def get(self, id):
        query = f"SELECT * FROM rating WHERE rating_id= '{id}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"rating ": res}, 200
        return {'message': 'rating not found'}, 404

    def post(self):
        data = Rating.parser.parse_args()
        category = data['category']
        query = f"SELECT * FROM rating WHERE r_category='{category.lower()}'"
        res = execute_read_query(db_conn, query)
        print(res)
        if res:
            return {'message': "A Cateogry with name '{}' already exists.".format(category)}, 400

        # get input data
        insert = f"INSERT INTO rating(r_category) VALUES('{category}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        query = f"SELECT * FROM rating WHERE rating_id='{id}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM rating WHERE rating_id = '{id}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'category not found'}, 404
        return {'message': 'record deleted'}


class RatingList(Resource):
    def get(self):
        query = 'SELECT * FROM rating'
        res = execute_read_query_dict(db_conn, query)
        return {'dish categories': res}, 200
