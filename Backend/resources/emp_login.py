from flask_restful import Resource, reqparse
from yaml import parse
from db import *


class EmpLogIn(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument('emp_id',
                        type=str,
                        required=False,
                        help="optional"
                        )

    parser.add_argument('password',
                        type=str,
                        required=False,
                        help="optional"
                        )

    def post(self):
        data = EmpLogIn.parser.parse_args()
        query = f"SELECT * FROM employee_login WHERE emp_id = '{data['emp_id']}' AND password = '{data['password']}'"
        res = execute_read_query(db_conn, query)
        if res:
            return {'message': 'login success'}, 200
        return {'message': "login failed, employee id or password did not match"}, 400
