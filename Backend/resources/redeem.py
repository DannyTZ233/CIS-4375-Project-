from flask_restful import Resource, reqparse
from models.redeem import RedeemModel
from schemas.redeem import RedeemSchema

redeem_schema = RedeemSchema()
redeem_list_schema = RedeemSchema(many=True)


class Redeem(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('point',
                        type=int,
                        required=True,
                        help="your customer points up to this point"
                        )

    def get(self, redeem_id):
        redeempoint = RedeemModel.find_by_name(redeem_id)
        if redeempoint:
            return redeem_schema.dump(redeempoint), 200
        return {'message': 'No points yet'}, 404

    def post(self, redeem_id):
        if RedeemModel.find_by_name(redeem_id):
            return {'message': "Record for '{}' already exists.".format(redeem_id)}, 400

        data = Redeem.parser.parse_args()

        redeempoint = RedeemModel(data['point'])
        try:
            redeempoint.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred storing the points."}, 500

        return redeem_schema.dump(redeempoint), 200

    def delete(self, redeem_id):
        redeempoint = RedeemModel.find_by_name(redeem_id)
        if redeempoint:
            redeempoint.delete_from_db()
        else:
            return {'message': 'points not availables'}, 404
        return {'message': 'Points deleted',
                'point': redeem_schema.dump(redeempoint)}

    def put(self, redeem_id):
        data = Redeem.parser.parse_args()

        redeempoint = RedeemModel.find_by_name(redeem_id)
        if redeempoint:
            if data['point'] != None:
                redeempoint.point = data['point']
        else:
            print('point')
            redeempoint = RedeemModel(data['point'])

        redeempoint.save_to_db()

        return redeem_schema.dump(redeempoint), 201


class RedeemList(Resource):
    def get(self):
        return {"points": redeem_list_schema.dump(RedeemModel.query.all())}, 200
