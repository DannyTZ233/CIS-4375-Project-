from ma import ma
from models.employeelogin import EmployeeLoginModel


class EmployeeLoginSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = EmployeeLoginModel
