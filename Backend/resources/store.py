from flask_restful import Resource, reqparse
from models.store import StoreModel
from schemas.store import StoreSchema

store_schema = StoreSchema()
store_list_schema = StoreSchema(many=True)


class Store(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('address',
                        type=str,
                        required=True,
                        help="every store must have an address!"
                        )
    parser.add_argument('name',
                        type=str,
                        required=False,
                        help="optional store name change"
                        )

    def get(self, name):
        store = StoreModel.find_by_name(name)
        if store:
            return store_schema.dump(store), 200
        return {'message': 'Store not found'}, 404

    def post(self, name):
        if StoreModel.find_by_name(name):
            return {'message': "A store with name '{}' already exists.".format(name)}, 400

        # get input data
        data = Store.parser.parse_args()

        store = StoreModel(name, data['address'])
        try:
            store.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred creating the store."}, 500

        return store_schema.dump(store), 200

    def delete(self, name):
        store = StoreModel.find_by_name(name)
        if store:
            store.delete_from_db()
        else:
            return {'message': 'store name not found'}, 404
        return {'message': 'Store deleted',
                'store': store_schema.dump(store)}

    def put(self, name):
        data = Store.parser.parse_args()

        store = StoreModel.find_by_name(name)
        if store:
            if data['name'] != None:
                store.name = data['name']
            store.address = data['address']
        else:
            print('name')
            store = StoreModel(name, data['address'])

        store.save_to_db()

        return store_schema.dump(store), 201


class StoreList(Resource):
    def get(self):
        # return {'stores': list(map(lambda x: x.json(), StoreModel.query.all()))}
        return {"stores": store_list_schema.dump(StoreModel.query.all())}, 200
