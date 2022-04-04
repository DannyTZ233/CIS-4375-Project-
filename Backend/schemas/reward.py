from ma import ma
from models.reward import RewardModel


class RewardSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = RewardModel
