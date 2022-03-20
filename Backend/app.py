from flask import Flask
from flask_restful import Api

from db import db
from resources import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@localhost/CIS4375'
# data migration
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
api = Api(app)


if __name__ == '__main__':
    db.init_app(app)
    app.run(port=5000, debug=True)
