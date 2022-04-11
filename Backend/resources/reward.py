from flask_restful import Resource, reqparse
from db import *


class Reward(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('category',
                        type=str,
                        # required=True,
                        help="required"
                        )
    parser.add_argument('point',
                        type=str,
                        # required=True,
                        help="required"
                        )

    def get(self, id):
        query = f"SELECT * FROM reward WHERE reward_id= '{id}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"rating ": res}, 200
        return {'message': 'rating not found'}, 404

    def post(self):
        data = Reward.parser.parse_args()
        category = data['category']
        point = data['point']
        query = f"SELECT * FROM reward WHERE reward_category='{category.lower()}'"
        res = execute_read_query(db_conn, query)
        print(res)
        if res:
            return {'message': "A Cateogry with name '{}' already exists.".format(category)}, 400

        # get input data
        insert = f"INSERT INTO reward(reward_category, r_point) VALUES('{category}', '{point}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        query = f"SELECT * FROM reward WHERE reward_id='{id}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM reward WHERE reward_id = '{id}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'category not found'}, 404
        return {'message': 'record deleted'}

    def put(self, id):
        data = Reward.parser.parse_args()
        category = data['category']
        point = data['point']
        query = f"SELECT * FROM reward WHERE reward_category= '{category}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            update_query = f"UPDATE reward SET reward_category='{category}', r_point='{point}' WHERE reward_id ='{id}'"
            execute_query(db_conn, update_query)
        else:
            insert_query = f''
            execute_query(db_conn, insert_query)
        return {'message': 'recard updated'}, 201


class RewardList(Resource):
    def get(self):
        query = 'SELECT * FROM reward'
        res = execute_read_query_dict(db_conn, query)
        return {'rewards': res}, 200
