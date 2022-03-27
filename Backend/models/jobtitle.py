from db import db


class JobTitleModel(db.Model):
    __tablename__ = 'jobtitle'

    id = db.Column(db.Integer, primary_key=True)
    job_type = db.Column(db.String(80))

    def __init__(self, job_type):
        self.job_type = job_type

    @classmethod
    def find_by_job_type(cls, job_type):
        return cls.query.filter_by(job_type=job_type).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()