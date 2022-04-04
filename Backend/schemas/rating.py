from ma import ma
from models.rating import RatingModel


class RatingSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = RatingModel
