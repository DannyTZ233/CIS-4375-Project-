from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from db import db
from ma import ma
from resources.store import Store, StoreList
from resources.employeequit import EmployeeQuit, EmployeeQuitList
from resources.redeem import Redeem, RedeemList
from resources.dishcategory import DishCategory, DishCategoryList


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///testdb.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
api = Api(app)


@app.before_first_request
def create_tables():
    db.create_all()
    print('tables created')


api.add_resource(Store, '/store/<string:name>')
api.add_resource(StoreList, '/stores')

# employee quit routes
api.add_resource(EmployeeQuit, '/employeequit/<string:category>')
api.add_resource(EmployeeQuitList, '/employeequit')

# redeem table routes
api.add_resource(Redeem, '/redeem/<integer:redeem_id>')
api.add_resource(RedeemList, '/redeem')

# dish category routes
api.add_resource(DishCategory, '/dishcategory/<string:dish_category>')
api.add_resource(DishCategoryList, '/dishcategory')

if __name__ == '__main__':
    db.init_app(app)
    ma.init_app(app)
    app.run(port=5000, debug=True)
