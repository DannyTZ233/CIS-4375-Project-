from db import db


class DishCategoryModel(db.Model):
    __tablename__ = 'dishcategory'

    id = db.Column(db.Integer, primary_key=True)
    dish_category = db.Column(db.String(50))

    def __init__(self, dish_category):
        self.dish_category = dish_category
    
    @classmethod
    def find_by_name(cls, dish_category):
        return cls.query.filter_by(dish_category=dish_category).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
