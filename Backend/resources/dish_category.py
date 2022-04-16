
from flask_restful import Resource, reqparse
from db import *


class DishCategory(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('dish_category_id',
                        type=str,
                        # required=True,
                        help="required"
                        )
    parser.add_argument('dish_category',
                        type=str,
                        # required=True,
                        help="required"
                        )

    def get(self, category):
        query = f"SELECT * FROM dish_category WHERE  lower(dish_category)= '{category.lower()}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"dish category": res}, 200
        return {'message': 'category not found'}, 404

    def post(self, category):
        query = f"SELECT * FROM store WHERE LOWER(dish_category)='{category.lower()}'"
        res = execute_read_query(db_conn, query)
        print(res)
        if res:
            return {'message': "A Cateogry with name '{}' already exists.".format(category)}, 400

        # get input data
        insert = f"INSERT INTO dish_category(dish_category) VALUES('{category}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, category):
        query = f"SELECT * FROM dish_category WHERE dish_category='{category}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM dish_category WHERE LOWER(dish_category) = '{category}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'category not found'}, 404
        return {'message': 'record deleted'}

    def put(self):
        data = DishCategory.parser.parse_args()
        query = f"SELECT * FROM dish_category WHERE dish_category_id = '{data['dish_category_id']}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            update_query = f"""
                UPDATE dish_category
                SET dish_category = '{data['dish_category']}'
                WHERE dish_category_id = '{data['dish_category_id']}'
            """
            execute_query(db_conn, update_query)
            return {"message": "record updated"}, 201
        return {"message": "record not found"}, 404


class DishCategoryList(Resource):
    def get(self):
        query = 'SELECT * FROM dish_category'
        res = execute_read_query_dict(db_conn, query)
        return {'dish categories': res}, 200
