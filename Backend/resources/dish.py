from flask_restful import Resource, reqparse
from db import *
import json
import datetime
from json import JSONEncoder
from random import randint


class Dish(Resource):

    def random_key_gen(n):
        range_start = 10**(n-1)
        range_end = (10**n)-1
        return randint(range_start, range_end)

    parser = reqparse.RequestParser()
    parser.add_argument('dish_name',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    parser.add_argument('dish_category_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    parser.add_argument('redeem_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    def get(self, id):
        query = f"""SELECT d.dish_id, d.dish_name, dc.dish_category, r.point
                    FROM dish d
                    JOIN dish_category as dc 
                    ON d.dish_category_id = dc.dish_category_id
                    JOIN redeem as r
                    ON d.redeem_id = r.redeem_id 
                    WHERE r.point = '{id}'"""
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"dish": res}, 200
        return {'message': 'dish not found'}, 404

    def post(self):
        data = Dish.parser.parse_args()
        dish_name = (data['dish_name'])
        query = f"SELECT * FROM dish WHERE dish_name = '{dish_name}'"
        res = execute_read_query(db_conn, query)
        if res:
            return {'message': "customer already exists in the database"}, 400
        insert = f"INSERT INTO dish(dish_name, dish_category_id, redeem_id) \
        VALUES('{data['dish_name']}', '{data['dish_category_id']}', '{data['redeem_id']}')"
        execute_query(db_conn, insert)
        return {'message': 'record added'}, 200

    def delete(self, id):
        query = f"SELECT * FROM dish WHERE dish_id='{id}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM dish WHERE LOWER(dish_id) = '{id}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'dish not found'}, 404
        return {'message': 'record deleted'}

    def put(self, id):
        pass


class DishList(Resource):
    def get(self):
        query = """SELECT d.dish_name, dc.dish_category, r.point
                    FROM dish d
                    JOIN dish_category as dc 
                    ON d.dish_category_id = dc.dish_category_id
                    JOIN redeem as r
                    ON d.redeem_id = r.redeem_id """
        res = execute_read_query_dict(db_conn, query)
        return {"customers": res}
