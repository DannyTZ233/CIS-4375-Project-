from db import db


class RedeemModel(db.Model):
    __tablename__ = 'redeem'

    id = db.Column(db.Integer, primary_key=True)
    point = db.Column(db.Integer)

    def __init__(self, point):
        self.point = point
    
    @classmethod
    def find_by_name(cls, point):
        return cls.query.filter_by(point=point).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
