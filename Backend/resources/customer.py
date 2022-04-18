
from flask_restful import Resource, reqparse
from db import *
import json
import datetime
from json import JSONEncoder
from random import randint


class Customer(Resource):

    def random_key_gen(n):
        range_start = 10**(n-1)
        range_end = (10**n)-1
        return randint(range_start, range_end)

    parser = reqparse.RequestParser()
    parser.add_argument('first_name',
                        type=str,
                        # required=True,
                        # help="required"
                        )
    parser.add_argument('customer_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )
    parser.add_argument('last_name',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    parser.add_argument('phone',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    parser.add_argument('email',
                        type=str,
                        # required=True,
                        # help="required"
                        )
    parser.add_argument('zip',
                        type=str,
                        # required=True,
                        # help="required"
                        )
    # parser.add_argument('name', type=str, default='')
    # parser.add_argument('id', type=int, default='')

    def get(self, id):
        query = f"SELECT * FROM customer_info WHERE customer_id = '{int(id)}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"customer": res}, 200
        return {'message': 'customer not found'}, 404

    def get(self, phone):
        query = f"SELECT * FROM customer_info WHERE phone = '{str(phone)}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"phonecustomer": res}, 200
        return {'message': 'customer not found'}, 404


    def post(self):
        data = Customer.parser.parse_args()
        phone = (data['phone'])
        query = f"SELECT * FROM customer_info WHERE phone = '{phone}'"
        res = execute_read_query(db_conn, query)
        if res:
            return {'message': "customer already exists in the database"}, 400
        log_in_key = Customer.random_key_gen(6)
        insert = f"INSERT INTO customer_info(first_name, last_name, phone, email, zip, customer_log_in_key) \
        VALUES('{data['first_name']}', '{data['last_name']}', '{data['phone']}', '{data['email']}', '{data['zip']}', {log_in_key})"
        execute_query(db_conn, insert)
        return {'message': 'record added'}, 200

    def delete(self, id):
        pass

    def put(self):
        data = Customer.parser.parse_args()

        query = f"SELECT * FROM customer_info WHERE customer_id = '{data['customer_id']}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            update_query = f"""UPDATE customer_info
                                SET 
                                first_name = '{data['first_name']}',
                                last_name = '{data['last_name']}',
                                phone = '{data['phone']}',
                                email = '{data['email']}',
                                zip = '{data['zip']}'
                                WHERE customer_id = '{data['customer_id']}'"""
            execute_query(db_conn, update_query)
            return {"message": "record updated"}, 201
        return {"message": "record not found"}, 404


class CustomerList(Resource):
    def get(self):
        query = 'SELECT * FROM customer_info'
        res = execute_read_query_dict(db_conn, query)
        return {"customers": res}
