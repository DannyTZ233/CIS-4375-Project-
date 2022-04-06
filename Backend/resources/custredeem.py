from flask_restful import Resource, reqparse
from models.custredeem import ReedemModel
from schemas.custredeem import CustRedeemSchema

redeem_schema = CustRedeemSchema()
redeem_list_schema = CustRedeemSchema(many=True)

class Redeem(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('dish_id',
                        type=int,
                        required=True,
                        help="Enter dish id"
                        )
    parser = reqparse.RequestParser()
    parser.add_argument('date',
                        type=str(),
                        required=False,
                        help="Enter date"
                        )
    

    def get(self, dish_id):
        redeem = ReedemModel.find_by_dishid(dish_id)
        if redeem:
            return redeem_schema.dump(redeem), 200
        return {'message': 'Type not found'}, 404

    def post(self, dish_id):
        if ReedemModel.find_by_dishid(dish_id):
            return {'message': "Customer Reedem '{}' already exists.".format(dish_id)}, 400

        # get input data
        data = Redeem.parser.parse_args()

        redeem = ReedemModel(dish_id, data['date'])
        try:
            redeem.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred creating the customer redeem."}, 500

        return reedem_schema.dump(redeem), 200

    def delete(self, dish_id):
        redeem = RedeemModel.find_by_dishid(dish_id)
        if redeem:
            redeem.delete_from_db()
        else:
            return {'message': 'Customer Redeem not found'}, 404
        return {'message': 'Customer Reedem deleted',
                'Customer Redeem': reedem_schema.dump(redeem)}


    def put(self, dish_id):
        data = Redeem.parser.parse_args()

        redeem = ReedemModel.find_by_dishid(dish_id)
        if redeem:
            if data['dish_id'] != None:
                redeem.dish_id = data['dish_id']
        else:
            print('dish_id')
            redeem = RedeemModel(dish_id)

        redeem.save_to_db()
        return reedem_schema.dump(redeem), 201


class ReedemList(Resource):
    def get(self):
        return {"Customer Redeem": redeem_list_schema.dump(ReedemModel.query.all())}, 200
