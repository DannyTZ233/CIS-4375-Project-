from flask_restful import Resource, reqparse
from models.rating import RatingModel
from schemas.rating import RatingSchema

rating_schema = RatingSchema()
rating_list_schema = RatingSchema(many=True)


class Rating(Resource):
    parser = reqparse.RequestParser()
    
    def get(self, type):
        ratingtype = RatingModel.find_by_type(type)
        if ratingtype:
            return rating_schema.dump(ratingtype), 200
        return {'message': 'Type not found'}, 404

    def post(self, type):
        if RatingModel.find_by_type(type):
            return {'message': "A rating type with type '{}' already exists.".format(type)}, 400

        # get input data
        ratingtype = Rating.parser.parse_args()

        #ratingtype = RatingModel(type, data['address'])
        try:
            ratingtype.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred creating the rating type."}, 500

        return rating_schema.dump(ratingtype), 200

    def delete(self, type):
        ratingtype = RatingModel.find_by_type(type)
        if ratingtype:
            ratingtype.delete_from_db()
        else:
            return {'message': 'Rating type not found'}, 404
        return {'message': 'Rating type deleted',
                'Leave type': rating_schema.dump(ratingtype)}


    def put(self, type):
        data = Rating.parser.parse_args()

        ratingtype = RatingModel.find_by_type(type)
        if ratingtype:
            if data['type'] != None:
                ratingtype.type = data['type']
        else:
            print('type')
            ratingtype = RatingModel(type)

        ratingtype.save_to_db()

        return rating_schema.dump(ratingtype), 201


class RatingList(Resource):
    def get(self):
        return {"Rating Types": rating_list_schema.dump(RatingModel.query.all())}, 200
