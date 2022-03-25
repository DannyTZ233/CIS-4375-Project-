from ma import ma
from models.store import StoreModel


class StoreSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = StoreModel
