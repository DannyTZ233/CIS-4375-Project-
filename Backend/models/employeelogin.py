from db import db


class EmployeeLoginModel(db.Model):
    __tablename__ = 'employeelogin'

    user_id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(50))
    emp_id = db.Column(db.Integer, foreign_key=True)#Needs to be reviewed, not sure how to do this

    def __init__(self, password):
        self.password = password

    @classmethod
    def find_by_user_id(cls, user_id):
        return cls.query.filter_by(user_id=user_id).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
