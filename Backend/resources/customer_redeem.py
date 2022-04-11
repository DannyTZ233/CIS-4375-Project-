from flask_restful import Resource, reqparse
from db import *
import json
import datetime
from json import JSONEncoder


class CustomerRedeem(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('customer_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    parser.add_argument('dish_id',
                        type=str,
                        # required=True,
                        # help="required"
                        )

    def get(self, id):
        query = f"""SELECT c.customer_id, c.first_name, c.last_name, d.dish_name, r.point,
                    cr.redeem_date
                    FROM customer_redeem as cr
                    JOIN customer_info as c
                    ON cr.customer_id = c.customer_id 
                    JOIN dish as d
                    ON cr.dish_id = d.dish_id 
                    JOIN redeem as r 
                    ON d.redeem_id = r.redeem_id
                    WHERE c.customer_id = '{id}'"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['redeem_date'] != None:
                i['redeem_date'] = i['redeem_date'].strftime("%m/%d/%Y")
        if res:
            return {"customer redeem": res}, 200
        return {'message': 'record not found'}, 404

    def post(self):
        data = CustomerRedeem.parser.parse_args()
        # get input data
        insert = f"INSERT INTO customer_redeem(customer_id, dish_id) \
        VALUES('{data['customer_id']}', '{data['dish_id']}')"

        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        pass

    def put(self, id):
        pass


class CustomerRedeemList(Resource):
    def get(self):
        query = """SELECT c.first_name, c.last_name, d.dish_name, r.point,
                    cr.redeem_date
                    FROM customer_redeem as cr
                    JOIN customer_info as c
                    ON cr.customer_id = c.customer_id 
                    JOIN dish as d
                    ON cr.dish_id = d.dish_id 
                    JOIN redeem as r 
                    ON d.redeem_id = r.redeem_id"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            if i['redeem_date'] != None:
                i['redeem_date'] = i['redeem_date'].strftime("%m/%d/%Y")
        return {"customer redeem": res}
