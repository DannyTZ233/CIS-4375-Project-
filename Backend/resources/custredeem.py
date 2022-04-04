from flask_restful import Resource, reqparse
from models.custredeem import ReedemModel
from schemas.custredeem import CustRedeemSchema

redeem_schema = CustRedeemSchema()
redeem_list_schema = CustRedeemSchema(many=True)

class Redeem(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('date',
                        type=str,
                        required=False,
                        help="Enter date"
                        )
    

    def get(self, dish_id):
        reward = RewardModel.find_by_dishid(dish_id)
        if redeem:
            return redeem_schema.dump(redeem), 200
        return {'message': 'Type not found'}, 404

    def post(self, dish_id):
        if ReedemModel.find_by_dishid(dish_id):
            return {'message': "Custoomer Reedem '{}' already exists.".format(dish_id)}, 400

        # get input data
        data = Redeem.parser.parse_args()

        redeem = ReedemModel(dish_id, data['date'])
        try:
            redeem.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred creating the customer redeem."}, 500

        return reedem_schema.dump(redeem), 200

    def delete(self, type):
        reward = RewardModel.find_by_type(type)
        if reward:
            reward.delete_from_db()
        else:
            return {'message': 'Reward type not found'}, 404
        return {'message': 'Reward type deleted',
                'Reward type': reward_schema.dump(reward)}


    def put(self, type):
        data = Reward.parser.parse_args()

        reward = RewardModel.find_by_type(type)
        if reward:
            if data['type'] != None:
                reward.type = data['type']
        else:
            print('type')
            reward = RewardModel(type)

        if reward:
            if data['point'] != None:
                reward.point = data['point']
        else:
            print('point')
            reward = RewardModel(point)

        reward.save_to_db()
        return reward_schema.dump(reward), 201


class ReedemList(Resource):
    def get(self):
        return {"Customer Redeem": redeem_list_schema.dump(ReedemModel.query.all())}, 200
