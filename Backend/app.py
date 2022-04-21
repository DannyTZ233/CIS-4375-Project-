from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask import jsonify, request
from datetime import date, datetime, time

from itsdangerous import json
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
# from resources.emp_login import EmpLogIn
from db import *
# customer survey

app = Flask(__name__)
api = Api(app)
CORS(app)


# store api endpoints
api.add_resource(Store, '/store/<string:name>')
api.add_resource(StoreList, '/stores')

# # Employee
# # Empployee quit
emp_quit_routes = [
    '/employee-quit',
    '/employee-quit/<string:category>'
]
api.add_resource(EmployeeQuit, *emp_quit_routes)
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
    '/employee-schedule/<id>',
]
# # employee schedule
api.add_resource(EmployeeSchedule, *emp_sche_routes)
api.add_resource(EmployeeScheduleList, '/employee-schedules')


@app.route('/employee-schedules/employees')
def emps_date():
    date = request.args.get('date', None)
    emp_query = f"""
        SELECT b.e_first_name, b.e_last_name, a.emp_id, check_in_id, check_out_id,log_datetime
        FROM employee_schedule as a
        JOIN employee as b
        ON a.emp_id = b.emp_id
        WHERE log_datetime LIKE '{date}%'
    """
    res = execute_read_query_dict(db_conn, emp_query)
    for i in res:
        i['total_time'] = ''
        if i['log_datetime'] != None:
            i['log_datetime'] = i['log_datetime'].strftime(
                "%H:%M:%S ").strip()
    for i in range(0, len(res)):
        for j in range(i+1, len(res)):
            if (res[i]['emp_id'] == res[j]['emp_id']) and res[j]['check_out_id'] != None:
                check_in_time = datetime.strptime(
                    res[i]['log_datetime'], "%H:%M:%S")
                check_out_time = datetime.strptime(
                    res[j]['log_datetime'], "%H:%M:%S")
                res[i]['total_time'] = str(check_out_time - check_in_time)
                print(str(check_out_time - check_in_time))
    work_time = []
    for i in res:
        if i['total_time'] != '':
            del i['log_datetime']
            work_time.append(i)
    return jsonify(work_time)

# customer by zipcode


@app.route('/customer/zip-data')
def cus_zip():
    query = """
        SELECT DISTINCT(zip) as zipcode, 
        COUNT(customer_id) as total FROM customer_info
        GROUP BY zip;
    """
    res = execute_read_query_dict(db_conn, query)
    return jsonify(res)


@app.route('/customer/survey-data')
def cus_survey():
    query = """
            SELECT 
            DISTINCT(r.r_category), COUNT(ci.customer_id)
            FROM customer_short_review as csr
            JOIN short_review_question as srq
            ON csr.short_review_id = srq.short_review_id 
            JOIN rating as r
            ON csr.rating_id = r.rating_id 
            JOIN customer_info as ci
            ON csr.customer_id = ci.customer_id
            GROUP BY r.r_category;
    """
    res = execute_read_query_dict(db_conn, query)
    return jsonify(res)


@app.route('/employee-schedule/employee')
def emp_date():
    # use default value repalce 'None'
    emp_id = request.args.get('emp_id', None)
    curr_date = request.args.get('curr_date', None)
    today = str(date.today().strftime("%Y-%m-%d"))
    emp_query = f"""
        SELECT emp_id, check_in_id, log_datetime, leave_id, check_out_id
        FROM employee_schedule as a
        WHERE log_datetime LIKE '{today}%' AND emp_id = '{emp_id}'
    """
    emp_info_query = f"""
        SELECT e_first_name as first_name, e_last_name as last_name
        FROM employee
        WHERE emp_id = '{emp_id}'
    """
    emp_res = execute_read_query_dict(db_conn, emp_info_query)
    res = execute_read_query_dict(db_conn, emp_query)
    for i in res:
        if i['log_datetime'] != None:
            i['log_datetime'] = i['log_datetime'].strftime(
                "%m/%d/%Y, %H:%M:%S ")
    check_in_out_var = {"checker": 0}
    print(len(res))
    if len(res) == 0:
        check_in_out_var["checker"] = 0
    if len(res) % 2 == 0 and len(res) > 0:
        check_in_out_var["checker"] = 2
    if len(res) % 2 != 0:
        check_in_out_var["checker"] = 1

    check_in_out_var["employee"] = emp_res
    return jsonify(check_in_out_var)


# customer
customer_routes = [
    '/customer',
    '/customer/<int:id>'
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

# login emp
# api.add_resource(EmpLogIn, '/emp-login')
if __name__ == '__main__':
    app.run(port=5000, debug=True)
