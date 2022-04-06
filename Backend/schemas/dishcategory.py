from ma import ma
from models.dishcategory import DishCategoryModel


class DishCategorySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = DishCategoryModel
