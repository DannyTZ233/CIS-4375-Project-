from db import db


class RatingModel(db.Model):
    __tablename__ = 'rating'

    rating_id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.Integer(5))

    def __init__(self, type):
        self.type = type

    @classmethod
    def show_all(cls):
        return cls.query()

    def find_by_type(cls, type):
        return cls.query.filter_by(type=type).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
