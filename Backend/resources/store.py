
from flask_restful import Resource, reqparse
from db import *
db_conn = create_connection(
    '127.0.0.1', 'root', 'Alife355005', 'CIS4375db')


class Store(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('address',
                        type=str,
                        required=True,
                        help="every store must have an address!"
                        )
    parser.add_argument('name',
                        type=str,
                        required=False,
                        help="optional store name change"
                        )

    def get(self, name):
        query = f"SELECT * FROM store WHERE LOWER(s_name) = '{name.lower()}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"store": res}, 200
        return {'message': 'title not found'}, 404

    def post(self, name):
        query = f"SELECT * FROM store WHERE s_name='{name}'"
        res = execute_read_query(db_conn, query)
        print(res)
        if res:
            return {'message': "A Cateogry with name '{}' already exists.".format(name)}, 400

        # get input data
        data = Store.parser.parse_args()
        address = data['address']
        insert = f"INSERT INTO store(s_name, address) VALUES('{name}', '{address}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, name):
        query = f"SELECT * FROM store WHERE s_name='{name}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM store WHERE LOWER(s_name) = '{name}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'title not found'}, 404
        return {'message': 'record deleted'}


class StoreList(Resource):
    def get(self):
        query = 'SELECT * FROM store'
        res = execute_read_query_dict(db_conn, query)
        return {'stores': res}, 200
