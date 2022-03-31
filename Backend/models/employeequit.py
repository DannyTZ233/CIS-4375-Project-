from db import db


class EmployeeQuitModel(db.Model):
    __tablename__ = 'employeequit'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50))

    def __init__(self, category):
        self.category = category

    @classmethod
    def find_by_name(cls, category):
        return cls.query.filter_by(category=category).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
