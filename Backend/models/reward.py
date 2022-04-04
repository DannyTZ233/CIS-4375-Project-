from db import db


class RewardModel(db.Model):
    __tablename__ = 'reward'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(30))
    point = db.Column(db.Integer)

    def __init__(self, type, point):
        self.type = type
        self.point = point

    @classmethod
    def show_all(cls):
        return cls.query()

    @classmethod
    def find_by_type(cls, type):
        return cls.query.filter_by(type=type).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()