from flask_restful import Resource, reqparse
from db import *


class CustomerPoint(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('customer_id',
                        type=str,
                        # required=True,
                        help="required"
                        )
    parser.add_argument('reward_id',
                        type=str,
                        # required=True,
                        help="required"
                        )

    def get(self, id):
        query = f"""SELECT cp.customer_id, ci.first_name, ci.last_name
                    , SUM(r.r_point) as total_point
                    FROM customer_point as cp
                    JOIN customer_info as ci
                    ON cp.customer_id = ci.customer_id
                    JOIN reward as r
                    ON cp.reward_id = r.reward_id
                    GROUP BY cp.customer_id, ci.first_name, ci.last_name
                    HAVING cp.customer_id = '{id}'"""
        res = execute_read_query_dict(db_conn, query)
        if res:
            for i in res:
                i['total_point'] = int(i['total_point'])
            return {"customer_point ": res}, 200
        return {'message': 'customer not found'}, 404

    def post(self):
        data = CustomerPoint.parser.parse_args()
        customer_id = data['customer_id']
        reward_id = data['reward_id']
        # get input data
        insert = f"INSERT INTO customer_point(customer_id, reward_id) VALUES('{customer_id}', '{reward_id}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, id):
        pass

    def put(self, id):
        pass


class CustomerPointList(Resource):
    def get(self):
        query = """SELECT cp.customer_id, ci.first_name, ci.last_name
                    , SUM(r.r_point) as total_point
                    FROM customer_point as cp
                    JOIN customer_info as ci
                    ON cp.customer_id = ci.customer_id
                    JOIN reward as r
                    ON cp.reward_id = r.reward_id
                    GROUP BY cp.customer_id, ci.first_name, ci.last_name"""
        res = execute_read_query_dict(db_conn, query)
        for i in res:
            i['total_point'] = int(i['total_point'])
        return {'rewards': res}, 200
