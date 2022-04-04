from ma import ma
from models.custredeem import ReedemModel


class CustRedeemSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = ReedemModel