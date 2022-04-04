from flask_restful import Resource, reqparse
from models.reward import RewardModel
from schemas.reward import RewardSchema

reward_schema = RewardSchema()
reward_list_schema = RewardSchema(many=True)

class Reward(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('type',
                        type=str,
                        required=True,
                        help="Please enter type"
                        )
    parser.add_argument('point',
                        type=str,
                        required=False,
                        help="points"
                        )
    

    def get(self, type):
        reward = RewardModel.find_by_type(type)
        if reward:
            return reward_schema.dump(reward), 200
        return {'message': 'Type not found'}, 404

    def post(self, type):
        if RewardModel.find_by_type(type):
            return {'message': "A reward with name '{}' already exists.".format(type)}, 400

        # get input data
        data = Reward.parser.parse_args()

        reward = RewardModel(type, data['point'])
        try:
            reward.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred creating the reward."}, 500

        return reward_schema.dump(reward), 200

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


class RewardList(Resource):
    def get(self):
        return {"Reward Types": reward_list_schema.dump(RewardModel.query.all())}, 200
