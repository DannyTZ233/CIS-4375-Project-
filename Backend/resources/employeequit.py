from flask_restful import Resource, reqparse
from models.employeequit import EmployeeQuitModel
from schemas.employeequit import EmployeeQuitSchema

employeequit_schema = EmployeeQuitSchema()
employeequit_list_schema = EmployeeQuitSchema(many=True)


class EmployeeQuit(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('category',
                        type=str,
                        required=True,
                        help="Must provide reason for quiting!"
                        )

    def get(self, category):
        quitreason = EmployeeQuitModel.find_by_name(category)
        if quitreason:
            return employeequit_schema.dump(quitreason), 200
        return {'message': 'Employee quit reason not found'}, 404

    def post(self, category):
        if EmployeeQuitModel.find_by_name(category):
            return {'message': "The employee quit reason '{}' already exists.".format(category)}, 400

        data = EmployeeQuit.parser.parse_args()

        quitreason = EmployeeQuitModel(data['category'])
        try:
            quitreason.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred creating the reason for quiting."}, 500

        return employeequit_schema.dump(quitreason), 200

    def delete(self, category):
        quitreason = EmployeeQuitModel.find_by_name(category)
        if quitreason:
            quitreason.delete_from_db()
        else:
            return {'message': 'Employee quit category not found'}, 404
        return {'message': 'Employee Quit category deleted',
                'category': employeequit_schema.dump(quitreason)}

    def put(self, category):
        data = EmployeeQuit.parser.parse_args()

        quitreason = EmployeeQuitModel.find_by_name(category)
        if quitreason:
            if data['category'] != None:
                quitreason.category = data['category']
        else:
            print('category')
            quitreason = EmployeeQuitModel(data['category'])

        quitreason.save_to_db()

        return employeequit_schema.dump(quitreason), 201


class EmployeeQuitList(Resource):
    def get(self):
        return {"category": employeequit_list_schema.dump(EmployeeQuitModel.query.all())}, 200
