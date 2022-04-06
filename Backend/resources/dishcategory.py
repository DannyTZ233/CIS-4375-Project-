from flask_restful import Resource, reqparse
from models.dishcategory import DishCategoryModel
from schemas.dishcategory import DishCategorySchema

dishcategory_schema = DishCategorySchema()
dishcategory_list_schema = DishCategorySchema(many=True)


class DishCategory(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('dish_category',
                        type=str,
                        required=True,
                        help="Category dish belongs to."
                        )

    def get(self, dish_category):
        dish = DishCategoryModel.find_by_name(dish_category)
        if dish:
            return dishcategory_schema.dump(dish), 200
        return {'message': 'Dish category does not exist'}, 404

    def post(self, dish_category):
        if DishCategoryModel.find_by_name(dish_category):
            return {'message': "'{}' already exists.".format(dish_category)}, 400

        data = DishCategory.parser.parse_args()

        dish = DishCategoryModel(data['dish_category'])
        try:
            dish.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred storing the dish category."}, 500

        return dishcategory_schema.dump(dish), 200

    def delete(self, dish_category):
        dish = DishCategoryModel.find_by_name(dish_category)
        if dish:
            dish.delete_from_db()
        else:
            return {'message': 'Dish category does not exist'}, 404
        return {'message': 'Dish Category deleted',
                'point': dishcategory_schema.dump(dish)}

    def put(self, dish_category):
        data = DishCategory.parser.parse_args()

        dish = DishCategoryModel.find_by_name(dish_category)
        if dish:
            if data['dish_category'] != None:
                dish.point = data['dish_category']
        else:
            print('dish_category')
            dish = DishCategoryModel(data['dish_category'])

        dish.save_to_db()

        return dishcategory_schema.dump(dish), 201


class DishCategoryList(Resource):
    def get(self):
        return {"dish_category": dishcategory_list_schema.dump(DishCategoryModel.query.all())}, 200
