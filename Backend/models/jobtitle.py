from db import db


class JobTitleModel(db.Model):
    __tablename__ = 'jobtitles'

    id = db.Column(db.Integer, primary_key=True)
    jobtitle = db.Column(db.String(80))

    def __init__(self, jobtitle):
        self.jobtitle = jobtitle

    @classmethod
    def find_by_jobtitle(cls, jobtitle):
        return cls.query.filter_by(jobtitle=jobtitle).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()