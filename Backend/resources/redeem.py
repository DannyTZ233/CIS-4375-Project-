from flask_restful import Resource, reqparse
from db import *


class Redeem(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('point',
                        type=str,
                        # required=True,
                        help="required"
                        )
    parser.add_argument('redeem_id',
                        type=str,
                        # required=True,
                        help="required"
                        )

    def get(self, point):
        query = f"SELECT * FROM redeem WHERE  point= '{point}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"point": res}, 200
        return {'message': 'point not found'}, 404

    def post(self, point):
        query = f"SELECT * FROM redeem WHERE point='{point}'"
        res = execute_read_query(db_conn, query)
        print(res)
        if res:
            return {'message': "point already exists"}, 400

        # get input data
        insert = f"INSERT INTO redeem(point) VALUES('{point}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, point):
        query = f"SELECT * FROM redeem WHERE point='{point}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM redeem WHERE point = '{point}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'record not found'}, 404
        return {'message': 'record deleted'}

    def put(self):
        data = Redeem.parser.parse_args()
        query = f"SELECT * FROM redeem WHERE redeem_id = '{data['redeem_id']}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            update_query = f"""
                UPDATE redeem
                SET point = '{data['point']}'
                WHERE redeem_id = '{data['redeem_id']}'
            """
            execute_query(db_conn, update_query)
            return {"message": "record updated"}, 201
        return {"message": "record not found"}, 404


class RedeemList(Resource):
    def get(self):
        query = 'SELECT * FROM redeem'
        res = execute_read_query_dict(db_conn, query)
        return {'redeems': res}, 200
