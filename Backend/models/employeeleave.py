from db import db


class EmpLeaveModel(db.Model):
    __tablename__ = 'employee_leave'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(30))

    def __init__(self, type):
        self.type = type

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
