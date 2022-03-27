from ma import ma
from models.jobtitle import JobTitleModel


class JobTitleSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = JobTitleModel
