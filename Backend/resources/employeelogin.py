from flask_restful import Resource, reqparse
from models.employeelogin import EmployeeLoginModel
from schemas.employeelogin import EmployeeLoginSchema

emplogin_schema = EmployeeLoginSchema()
emplogin_list_schema = EmployeeLoginSchema(many=True)


class EmployeeLogin(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('password',
                        type=int,
                        required=True,
                        help="Enter password"
                        )

    def get(self, user_id):
        emplogin = EmployeeLoginModel.find_by_user_id(user_id)
        if emplogin:
            return emplogin_schema.dump(emplogin), 200
        return {'message': 'ID not found'}, 404

    def post(self, user_id):
        if EmployeeLoginModel.find_by_user_id(user_id):
            return {'message': "A user with user_id '{}' already exists.".format(user_id)}, 400

        # get input data
        data = EmployeeLogin.parser.parse_args()

        emplogin = EmployeeLoginModel(user_id, data['password'])
        try:
            emplogin.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred creating the employee login."}, 500

        return emplogin_schema.dump(emplogin), 200

    def delete(self, user_id):
        emplogin = EmployeeLoginModel.find_by_name(user_id)
        if emplogin:
            emplogin.delete_from_db()
        else:
            return {'message': 'Employee Login user_id not found'}, 404
        return {'message': 'Employee user_id deleted',
                'employeelogin': emplogin_schema.dump(emplogin)}

    def put(self, user_id):
        data = EmployeeLogin.parser.parse_args()

        emplogin = EmployeeLoginModel.find_by_name(user_id)
        if emplogin:
            if data['user_id'] != None:
                employeelogin.user_id = data['user_id']
            employeelogin.address = data['password']
        else:
            print('user_id')
            employeelogin = EmployeeLoginModel(user_id, data['password'])

        employeelogin.save_to_db()

        return emplogin_schema.dump(emplogin), 201


class EmpLoginList(Resource):
    def get(self):
        # return {'stores': list(map(lambda x: x.json(), EmployeeLoginModel.query.all()))}
        return {"stores": emplogin_list_schema.dump(EmployeeLoginModel.query.all())}, 200