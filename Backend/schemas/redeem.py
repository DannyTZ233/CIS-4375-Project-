from ma import ma
from models.redeem import RedeemModel


class RedeemSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = RedeemModel
