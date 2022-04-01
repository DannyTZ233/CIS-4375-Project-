from flask_restful import Resource, reqparse
from models.employeeleave import EmpLeaveModel
from schemas.employeeleave import EmpLeaveSchema

empleave_schema = EmpLeaveSchema()
empleave_list_schema = EmpLeaveSchema(many=True)


class EmployeeLeave(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('type',
                        type=str,
                        required=True,
                        help="every store must have an address!"
                        )
    def get(self, type):
        leavetype = EmpLeaveModel.find_by_type(type)
        if leavetype:
            return empleave_schema.dump(leavetype), 200
        return {'message': 'Type not found'}, 404

    def post(self, type):
        if EmpLeaveModel.find_by_type(type):
            return {'message': "A leave type with type '{}' already exists.".format(type)}, 400

        # get input data
        # data = EmployeeLeave.parser.parse_args()

        leavetype = EmpLeaveModel(type)
        try:
            leavetype.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred creating the leave type."}, 500

        return empleave_schema.dump(leavetype), 200

    def delete(self, type):
        leavetype = EmpLeaveModel.find_by_type(type)
        if leavetype:
            leavetype.delete_from_db()
        else:
            return {'message': 'Leave type not found'}, 404
        return {'message': 'Employee leave type deleted',
                'Leave type': empleave_schema.dump(leavetype)}


    def put(self, type):
        data = EmployeeLeave.parser.parse_args()

        leavetype = EmpLeaveModel.find_by_type(type)
        if leavetype:
            if data['type'] != None:
                leavetype.type = data['type']
        else:
            print('type')
            leavetype = EmpLeaveModel(type)

        leavetype.save_to_db()

        return empleave_schema.dump(leavetype), 201


class EmpLeaveList(Resource):
    def get(self):
        return {"Employee Leave Types": empleave_list_schema.dump(EmpLeaveModel.query.all())}, 200
