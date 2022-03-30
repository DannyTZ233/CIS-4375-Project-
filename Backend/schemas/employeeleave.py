from ma import ma
from models.employeeleave import EmpLeaveModel


class EmpLeaveSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = EmpLeaveModel
