from ma import ma
from models.employeequit import EmployeeQuitModel


class EmployeeQuitSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = EmployeeQuitModel
