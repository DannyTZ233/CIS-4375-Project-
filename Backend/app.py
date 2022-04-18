from flask import Flask
from flask_restful import Api
from flask_cors import CORS , cross_origin

# employee
from resources.store import Store, StoreList
from resources.employee_quit import EmployeeQuit, EmployeeQuitList
from resources.employee_leave import EmployeeLeave, EmployeeLeaveList
from resources.job_title import JobTitleList, JobTitle
from resources.employee_check_in import EmployeeCheckIn, Employee_Check_In_List
from resources.employee_check_out import EmployeeCheckOut, Employee_Check_Out_List
from resources.employee import Employee, EmployeeList
from resources.employee_schedule import EmployeeSchedule, EmployeeScheduleList
from resources.customer import Customer, CustomerList
from resources.dish_category import DishCategory, DishCategoryList
from resources.redeem import Redeem, RedeemList
from resources.dish import Dish, DishList
from resources.rating import Rating, RatingList
from resources.service_review_question import ServiceReviewQuestion, ServiceReviewQuestionList
from resources.env_review_question import EnvironmentReviewQuestion, EnvironmentReviewQuestionList
from resources.dish_review_question import DishReviewQuestion, DishReviewQuestionList
from resources.service_review import ServiceReview, ServiceReviewList
from resources.env_review import EnvironmentReivew, EnvironmentReivewList
from resources.dish_review import DishReview, DishReviewList
from resources.reward import Reward, RewardList
from resources.customer_point import CustomerPoint, CustomerPointList
from resources.short_review_question import ShortReviewQuestion, ShortReviewQuestionList
from resources.customer_short_review import CustomerShortReview, CustomerShortReviewList
from resources.emp_reply import EmployeeReply, EmployeeReplyList
from resources.customer_redeem import CustomerRedeem, CustomerRedeemList
# customer survey

app = Flask(__name__)

CORS(app)
api = Api(app)


# store api endpoints
api.add_resource(Store, '/store/<string:name>')
api.add_resource(StoreList, '/stores')

# # Employee
# # Empployee quit
api.add_resource(EmployeeQuit, '/employee-quit/<string:category>')
api.add_resource(EmployeeQuitList, '/employee-quits')
# # employee leave
api.add_resource(EmployeeLeave, '/employee-leave/<string:category>')
api.add_resource(EmployeeLeaveList, '/employee-leaves')
# # job title
api.add_resource(JobTitle, '/job-title/<string:title>')
api.add_resource(JobTitleList, '/job-titles')
# # employee check in
api.add_resource(EmployeeCheckIn, '/employee-check-in/<string:category>')
api.add_resource(Employee_Check_In_List, '/employee-check-ins')
# # employee check out
api.add_resource(EmployeeCheckOut, '/employee-check-out/<string:category>')
api.add_resource(Employee_Check_Out_List, '/employee-check-outs')

# employee login

# # emplyee
emp_routes = [
    '/employee',
    '/employee/<id>'
]
api.add_resource(Employee, *emp_routes)
api.add_resource(EmployeeList, '/employees')

emp_sche_routes = [
    '/employee-schedule',
    '/employee-schedule/<id>'
]
# # employee schedule
api.add_resource(EmployeeSchedule, *emp_sche_routes)
api.add_resource(EmployeeScheduleList, '/employee-schedules')

# customer
customer_routes = [
    '/customer',
    '/customer/<int:id>',
    '/phonecustomer/<phone>',
]
api.add_resource(Customer, *customer_routes)
api.add_resource(CustomerList, '/customers')

# dish category
dish_cate_routes = [
    '/dish-category',
    '/dish-category/<string:category>',
    '/dish-category/<int:id>'
]
api.add_resource(DishCategory, *dish_cate_routes)
api.add_resource(DishCategoryList, '/dish_categories')

# redeem
redeem_routes = [
    '/redeem',
    '/redeem/<int:point>',
]
api.add_resource(Redeem, *redeem_routes)
api.add_resource(RedeemList, '/redeems')

# dish
dish_routes = [
    '/dish',
    '/dish/<int:id>'
]
api.add_resource(Dish, *dish_routes)
api.add_resource(DishList, '/dishes')

# rating
rating_routes = [
    '/rating',
    '/rating/<int:id>'
]
api.add_resource(Rating, *rating_routes)
api.add_resource(RatingList, '/ratings')
# service reviwe question
ser_question_routes = [
    '/ser-review-question',
    '/ser-review-question/<int:id>'
]
api.add_resource(ServiceReviewQuestion, *ser_question_routes)
api.add_resource(ServiceReviewQuestionList, '/ser-review-questions')
# env reviwe question
env_question_routes = [
    '/env-review-question',
    '/env-review-question/<int:id>'
]
api.add_resource(EnvironmentReviewQuestion, *env_question_routes)
api.add_resource(EnvironmentReviewQuestionList, '/env-review-questions')
# dish review question
dish_question_routes = [
    '/dish-review-question',
    '/dish-review-question/<int:id>'
]
api.add_resource(DishReviewQuestion, *dish_question_routes)
api.add_resource(DishReviewQuestionList, '/dish-review-questions')
# service review
service_review_routes = [
    '/service-review',
    '/service-review/<int:id>'
]
api.add_resource(ServiceReview, *service_review_routes)
api.add_resource(ServiceReviewList, '/service-reviews')

# environment review
env_review_routes = [
    '/env-review',
    '/env-review/<int:id>'
]
api.add_resource(EnvironmentReivew, *env_review_routes)
api.add_resource(EnvironmentReivewList, '/env-reviews')

# dish review
dish_review_routes = [
    '/dish-review',
    '/dish-review/<int:id>'
]
api.add_resource(DishReview, *dish_review_routes)
api.add_resource(DishReviewList, '/dish-reviews')

# reward review
reward_routes = [
    '/reward',
    '/reward/<int:id>'
]
api.add_resource(Reward, *reward_routes)
api.add_resource(RewardList, '/rewards')

# customer point review
customer_point_routes = [
    '/customer-point',
    '/customer-point/<int:id>'
]
api.add_resource(CustomerPoint, *customer_point_routes)
api.add_resource(CustomerPointList, '/customer-points')

# short review question review
short_review_question_routes = [
    '/short-review-question',
    '/short-review-question/<int:id>'
]
api.add_resource(ShortReviewQuestion, *short_review_question_routes)
api.add_resource(ShortReviewQuestionList, '/short-review-questions')

# customer short review question review
customer_short_review_routes = [
    '/customer-short-review',
    '/customer-short-review/<int:id>'
]
api.add_resource(CustomerShortReview, *customer_short_review_routes)
api.add_resource(CustomerShortReviewList, '/customer-short-reviews')

# employee reply review
emp_reply_routes = [
    '/emp-reply',
    '/emp-reply/<int:id>'
]
api.add_resource(EmployeeReply, *emp_reply_routes)
api.add_resource(EmployeeReplyList, '/emp-replies')

# customer redeem
cus_redeem_routes = [
    '/cus-redeem',
    '/cus-redeem/<int:id>'
]
api.add_resource(CustomerRedeem, *cus_redeem_routes)
api.add_resource(CustomerRedeemList, '/cus-redeems')
if __name__ == '__main__':
    app.run(port=5000, debug=True)
