from db import db

class ReedemModel(db.Model):
    __tablename__ = 'customer_redeem'

    id = db.Column(db.Integer, primary_key=True)
    dish_id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(100))

    def __init__(self, dish_id, date):
        self.dish_id = dish_id
        self.date = date

    @classmethod
    def show_all(cls):
        return cls.query()

    @classmethod
    def find_by_dishid(cls, dish_id):
        return cls.query.filter_by(dish_id=dish_id).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()