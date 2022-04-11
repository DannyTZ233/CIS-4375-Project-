from flask_restful import Resource, reqparse
from db import *
# db_conn = create_connection(
#     '127.0.0.1', 'root', 'Alife355005', 'CIS4375db')


class JobTitle(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument('title',
                        type=str,
                        required=False,
                        help="optional"
                        )

    def get(self, title):
        query = f"SELECT * FROM job_title WHERE LOWER(jt_category) = '{title.lower()}'"
        res = execute_read_query_dict(db_conn, query)
        if res:
            return {"job title": res}, 200
        return {'message': 'title not found'}, 404

    def post(self, title):
        query = f"SELECT * FROM job_title WHERE jt_category='{title.lower()}'"
        res = execute_read_query(db_conn, query)
        if res:
            return {'message': "A Cateogry with name '{}' already exists.".format(title)}, 400

        # get input data
        insert = f"INSERT INTO job_title(jt_category) VALUES('{title.lower()}')"
        execute_query(db_conn, insert)

        return {'message': 'record added'}, 200

    def delete(self, title):
        query = f"SELECT * FROM job_title WHERE jt_category='{title.lower()}'"
        res = execute_read_query(db_conn, query)
        if res:
            delete_query = f"DELETE FROM job_title WHERE LOWER(jt_category) = '{title.lower()}'"
            execute_query(db_conn, delete_query)
        else:
            return {'message': 'title not found'}, 404
        return {'message': 'record deleted'}

    def put(self, title):
        pass


class JobTitleList(Resource):
    def get(self):
        query = 'SELECT * FROM job_title'
        res = execute_read_query_dict(db_conn, query)
        return {'job titles': res}, 200
