from flask import Flask, jsonify, request, render_template
# from flask_restful import Api
from flask_cors import CORS 
from datetime import date, datetime
import flask 

from db import *

# ===============
import pandas as pd
from pandas import json_normalize
import matplotlib.pyplot as plt
from wordcloud import WordCloud
from wordcloud import ImageColorGenerator
from wordcloud import STOPWORDS
from flask import send_file, send_from_directory, safe_join, abort
from PIL import Image
import base64
import io
# ===============
app = Flask(__name__)

# ================
app.config["WORD_CLOUD_IMG"] = "n.png"
# ================
CORS(app)
# api = Api(app)
@app.route('/', methods=['GET'])
def home():
    return {"message": "welcome"}


@app.route('/store', methods=['GET', 'POST', 'DELETE', 'PUT'])
def store():
    store_id = request.args.get('id', None)
    s_name = request.args.get('name', None)
    stores = request.args.get('stores', None)
    if flask.request.method == 'POST':
        request_data = request.get_json()
        name = request_data['name']
        address = request_data['address']
        query = f"SELECT * FROM store WHERE s_name='{name}'"
        res = execute_read_query(mysql_get_mydb(), query)
        print(res)
        if res:
            return {'message': "A Cateogry with name '{}' already exists.".format(name)}, 400
        insert = f"INSERT INTO store(s_name, address) VALUES('{name}', '{address}')"
        execute_query(mysql_get_mydb(), insert)
        return {"message": "record added"}, 201
    if flask.request.method == 'GET':
        if s_name:
            query = f"SELECT * FROM store WHERE LOWER(s_name) = '{s_name.lower()}'"
            res = execute_read_query_dict(mysql_get_mydb(), query)
            if res:
                return {"store": res}, 200
        if store_id:
            query = f"SELECT * FROM store WHERE store_id = '{store_id}'"
            res = execute_read_query_dict(mysql_get_mydb(), query)
            if res:
                return {"store": res}, 200
        if stores:
            query = 'SELECT * FROM store'
            res = execute_read_query_dict(mysql_get_mydb(), query)
            return {'stores': res}, 200
    if flask.request.method == 'DELETE':
        if s_name:
            query = f"SELECT * FROM store WHERE LOWER(s_name)='{s_name.lower()}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                delete_query = f"DELETE FROM store WHERE LOWER(s_name) = '{s_name.lower()}'"
                execute_query(mysql_get_mydb(), delete_query)
                return {'message': 'record deleted'}
        if store_id:
            query = f"SELECT * FROM store WHERE store_id='{store_id}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                delete_query = f"DELETE FROM store WHERE store_id = '{store_id}'"
                execute_query(mysql_get_mydb(), delete_query)
                return {'message': 'record deleted'}
    return {"message": "store not found"}, 404


@app.route('/employee', methods=['GET', 'POST', 'PUT'])
def employee():
    emp_id = request.args.get('id', None)
    employees = request.args.get('employees', None)
    quit_checker = request.args.get('quit', None)
    phone = request.args.get('phone', None)
    email = request.args.get('email', None)
    pos = request.args.get('position', None)
    # s_name = request.args.get('name', None)
    if flask.request.method == 'GET':
        if emp_id:
            query = f"""SELECT 
                    e.emp_id, e.e_first_name, e.e_last_name, e.e_phone, e.e_email,
                    e.join_date, e.quit_date,
                    s.s_name, e.job_title
                    FROM 
                    employee as e
                    JOIN store as s
                    ON e.store_id = s.store_id
                    WHERE e.emp_id = '{emp_id}'"""
            res = execute_read_query_dict(mysql_get_mydb(), query)
            if res:
                # for i in res:
                #     if i['join_date'] != None:
                #         i['join_date'] = i['join_date'].strftime("%Y-%m-%d")
                return {"employee": res}, 200
        if employees:
            query = f"""SELECT 
                    e.emp_id, e.e_first_name, e.e_last_name, e.e_phone, e.e_email,
                    e.join_date, e.quit_date,
                    s.s_name, e.job_title
                    FROM 
                    employee as e
                    JOIN store as s
                    ON e.store_id = s.store_id"""
            res = execute_read_query_dict(mysql_get_mydb(), query)
            print(res)
            if res:
                # for i in res:
                #     if i['join_date'] != None:
                #         i['join_date'] = i['join_date'].strftime("%m-%d-%Y")
                return {'employees': res}, 200
    if flask.request.method == 'POST':
        data = request.get_json()
        today = date.today().strftime("%Y-%m-%d")
        query = f"SELECT * FROM employee WHERE e_phone = '{data['e_phone']}'"
        res = execute_read_query(mysql_get_mydb(), query)
        if res:
            return {'message': "employee already exists in the database"}, 400
        insert = f"""
                INSERT INTO employee
                (e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date) \
                VALUES('{data['e_first_name']}', '{data['e_last_name']}', '{data['e_phone']}', 
                '{data['e_email']}', '{data['job_title']}', '{data['store_id']}', '{today}')"""
        execute_query(mysql_get_mydb(), insert)
        return {'message': 'record added'}, 200

    if flask.request.method == 'DELETE':
        if emp_id:
            query = f"SELECT * FROM employee WHERE emp_id='{emp_id}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                delete_query = f"DELETE FROM employee WHERE emp_id = '{emp_id}'"
                execute_query(mysql_get_mydb(), delete_query)
                return {'message': 'record deleted'}, 201
    
    if flask.request.method =='PUT':
        data = request.get_json()
        if quit_checker:
            today = date.today().strftime("%Y-%m-%d")
            query = f"SELECT * FROM employee WHERE emp_id='{emp_id}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                update_query = f"UPDATE employee SET quit_date = '{today}' WHERE emp_id = '{emp_id}'"
                execute_query(mysql_get_mydb(), update_query)
                return {'message': 'record updated'}, 201
        if phone:
            query = f"SELECT * FROM employee WHERE emp_id='{emp_id}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                update_query = f"UPDATE employee SET e_phone = '{phone}' WHERE emp_id = '{emp_id}'"
                execute_query(mysql_get_mydb(), update_query)
                return {'message': 'record updated'}, 201
        if email:
            query = f"SELECT * FROM employee WHERE emp_id='{emp_id}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                update_query = f"UPDATE employee SET e_email = '{email}' WHERE emp_id = '{emp_id}'"
                execute_query(mysql_get_mydb(), update_query)
                return {'message': 'record updated'}, 201
        if pos:
            query = f"SELECT * FROM employee WHERE emp_id='{emp_id}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                update_query = f"UPDATE employee SET job_title = '{pos}' WHERE emp_id = '{emp_id}'"
                execute_query(mysql_get_mydb(), update_query)
                return {'message': 'record updated'}, 201
        query = f"SELECT * FROM employee WHERE emp_id='{emp_id}'"
        res = execute_read_query(mysql_get_mydb(), query)
        if res:
            update_query = f"""
                    UPDATE employee 
                    SET e_first_name = '{data['e_first_name']}',
                    e_last_name = '{data['e_last_name']}',
                    e_phone = '{data['e_phone']}',
                    e_email = '{data['e_email']}',
                    job_title = '{data['job_title']}'
                    WHERE emp_id = '{emp_id}'"""
            execute_query(mysql_get_mydb(), update_query)
            return {'message': 'record updated'}, 201
    return {"message": "employee not found"}, 404


@app.route('/login', methods=['POST', 'PUT', 'GET'])
def login():
    employee = request.args.get('employee', None)
    admin = request.args.get('admin', None)
    data = request.get_json()
    emp_id = request.args.get('id', None)
    if flask.request.method == 'GET':
        query = "SELECT * FROM employee_login"
        res = execute_read_query_dict(mysql_get_mydb(), query)
        return {"all_logins": res}, 200
    if flask.request.method == 'POST':
        if employee:
            emp_query = f"SELECT * FROM employee_login WHERE emp_id = '{data['emp_id']}' AND password = '{data['password']}'"
            emp_res = execute_read_query(mysql_get_mydb(), emp_query)
            if emp_res:
                return {"login": "success"}, 200
            return {"login": "failed"}, 404
        elif admin:
            position_query = f"SELECT job_title FROM employee WHERE emp_id = '{data['emp_id']}'"
            position_res = execute_read_query_dict(mysql_get_mydb(), position_query)
            position = position_res[0]['job_title']
            if position.lower() == 'manager':
                admin_query = f"SELECT * FROM employee_login WHERE emp_id = '{data['emp_id']}' AND password = '{data['password']}'"
                admin_res = execute_read_query(mysql_get_mydb(), admin_query)
                if admin_res:
                    return {"login": "success"}, 200
                return {"login": "failed"}, 404
            else:
                return {"message": "premission denied"}, 401
        else:
            find_query = f"SELECT * FROM employee_login WHERE emp_id = '{data['emp_id']}'"
            find_res = execute_read_query(mysql_get_mydb(), find_query)
            if not find_res:
                position_query = f"SELECT job_title FROM employee WHERE emp_id = '{data['emp_id']}'"
                position_res = execute_read_query_dict(mysql_get_mydb(), position_query)
                position = position_res[0]['job_title']
                if position.lower() == 'manager':
                    insert = f"INSERT INTO employee_login (emp_id, password) VALUES('{data['emp_id']}', '{data['password']}')"
                    execute_query(mysql_get_mydb(), insert)
                    return {"message": "record created"}, 201
                else:
                    return {"message": "employee permission denied"}, 404
            else: 
                return {"message": "employee login already exist"}, 404
        # return {"login": "failed"}, 404
    if flask.request.method == 'PUT':
        if emp_id and data['password']:
            query = f"SELECT * FROM employee_login WHERE emp_id='{emp_id}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                update = f"UPDATE employee_login SET password = '{data['password']}' WHERE emp_id = '{emp_id}'"
                execute_query(mysql_get_mydb(), update)
                return {"message": "record updated"}
            # else:
            #     insert = f"INSERT INTO employee_login (emp_id, password) VALUES('{emp_id}', '{data['password']}')"
            #     execute_query(mysql_get_mydb(), insert)
            #     return {"message": "record created"}, 201
        return {"message": "employee not found"}, 404


@app.route('/employee-schedule', methods=['PUT', 'GET', 'POST'])
def emp_sch():
    emp_id = request.args.get('id', None)
    clock_date = request.args.get('date', None)
    all_sch = request.args.get('all_sch', None)
    if flask.request.method == 'GET':
        if emp_id and clock_date:
            query = f"SELECT * FROM employee WHERE emp_id='{emp_id}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                check_query = f"""SELECT 
                es.emp_id, 
                e.e_first_name,
                e.e_last_name,
                e.job_title,
                check_in_time, 
                check_out_time,
                log_datetime, 
                total_time
                FROM employee_schedule as es
                JOIN employee e
                ON es.emp_id = e.emp_id
                WHERE es.emp_id='{emp_id}' AND log_datetime LIKE '{clock_date}%'"""
                res1 = execute_read_query_dict(mysql_get_mydb(), check_query)
                if res1:
                    # for i in res1:
                    #     if i['log_datetime'] != None:
                    #         i['log_datetime'] = i['log_datetime'].strftime("%Y-%m-%d")
                    return {"employee": res1}, 200
                else:
                    return {"employee": "NULL"}, 200
        if all_sch:
            query = f"""SELECT 
                es.emp_id, 
                e.e_first_name,
                e.e_last_name,
                e.job_title,
                check_in_time, 
                check_out_time,
                log_datetime, 
                total_time
                FROM employee_schedule as es
                JOIN employee e
                ON es.emp_id = e.emp_id"""
            all_res = execute_read_query_dict(mysql_get_mydb(), query)
            # for i in all_res:
            #             if i['log_datetime'] != None:
            #                 i['log_datetime'] = i['log_datetime'].strftime("%Y-%m-%d")
            return {"employee_schedules": all_res}, 200
        if clock_date:
            query = f"""SELECT 
                es.emp_id, 
                e.e_first_name,
                e.e_last_name,
                e.job_title,
                check_in_time, 
                check_out_time,
                log_datetime, 
                total_time
                FROM employee_schedule as es
                JOIN employee e
                ON es.emp_id = e.emp_id
                WHERE log_datetime LIKE '{clock_date}%'"""
            all_res = execute_read_query_dict(mysql_get_mydb(), query)
            # for i in all_res:
            #             if i['log_datetime'] != None:
            #                 i['log_datetime'] = i['log_datetime'].strftime("%Y-%m-%d")
            return {"employee_schedules": all_res}, 200
    if flask.request.method == 'POST':
        today = date.today().strftime("%Y-%m-%d")
        print(today)
        query = f"SELECT * FROM employee WHERE emp_id = '{emp_id}'"
        sch_query = f"SELECT * FROM employee_schedule WHERE emp_id = '{emp_id}' AND log_datetime LIKE '{today}%'"
        res = execute_read_query(mysql_get_mydb(), query)
        sch_res = execute_read_query(mysql_get_mydb(), sch_query)
        if res:
            if not sch_res:
                time = datetime.now().strftime("%H:%M:%S")
                print(time)
                insert = f"""
                        INSERT INTO employee_schedule
                        (emp_id, check_in_time, log_datetime) \
                        VALUES('{emp_id}', '{time}', '{today}')"""
                execute_query(mysql_get_mydb(), insert)
                return {'message': 'record added'}, 200
            return {"message": "employee already check in"}, 400
    if flask.request.method == 'PUT':
        today = date.today().strftime("%Y-%m-%d")
        sch_query = f"SELECT * FROM employee_schedule WHERE emp_id = '{emp_id}' AND log_datetime LIKE '{today}%'"
        sch_res = execute_read_query(mysql_get_mydb(), sch_query)
        if sch_res:
            out_query = f"SELECT check_out_time FROM employee_schedule WHERE emp_id = '{emp_id}' AND log_datetime LIKE '{today}%'"
            out_res = execute_read_query(mysql_get_mydb(), out_query)
            print(out_res[0][0])
            if not out_res[0][0]:
                time = datetime.now().strftime("%H:%M:%S")
                
                get_time_query = f"SELECT check_in_time FROM employee_schedule WHERE emp_id = {emp_id} AND log_datetime LIKE '{today}%'"
                res = execute_read_query_dict(mysql_get_mydb(), get_time_query)
                print(time)
                print(res)
                print(res[0])
                print(res[0]['check_in_time'])
                res[0]['check_in_time'] = datetime.strptime(
                                res[0]['check_in_time'], "%H:%M:%S")
                check_out_time = datetime.strptime(
                                time, "%H:%M:%S")
                print(check_out_time, res[0]['check_in_time'])
                total_time = check_out_time - res[0]['check_in_time']
                print(total_time)
                check_out_query = f"""UPDATE employee_schedule 
                                        SET check_out_time = '{time}',
                                            total_time = '{str(total_time)}'
                                        WHERE emp_id = '{emp_id}'"""
                execute_query(mysql_get_mydb(), check_out_query)
                return {"message": "check out successfull"}
            else:
                return {"message": "employee checked out already"}, 400
    return {"message": "employee not found"}, 404


@app.route('/customer-survey', methods=['POST', 'GET'])
def cus_survey():
    if flask.request.method == 'POST':
        data = request.get_json()
        insert_query = f"""
                INSERT INTO customer_survey
                (zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
                VALUES (
                    '{data['zip_code']}',
                    '{data['service']}',
                    '{data['environment']}',
                    '{data['food']}',
                    '{data['over_all_rating']}',
                    '{data['comment']}'
                )
        """
        execute_query(mysql_get_mydb(), insert_query)
        return {"message": "record added"}, 201
    if flask.request.method == 'GET':
        query = """SELECT  
            zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment
        FROM customer_survey"""
        res = execute_read_query_dict(mysql_get_mydb(), query) 
        return {"survey": res}, 200


@app.route('/customer-survey/report', methods=['POST', 'GET'])
def survey_report():
    zip = request.args.get('zip', None)
    food = request.args.get('food', None)
    env = request.args.get('env', None)
    service = request.args.get('service', None)
    over_all = request.args.get('overall', None)
    wordcloud = request.args.get('wordcloud', None)
    def report_query(survey_type):
        query = f"""
            SELECT {survey_type}, COUNT(cus_sur_id) as 'total_count'
            FROM customer_survey
            GROUP BY {survey_type}
            UNION ALL SELECT NULL, COUNT(zip_code) 
            FROM customer_survey;
            """
        res = execute_read_query_dict(mysql_get_mydb(), query)
        return res
    if flask.request.method == 'GET':
        if zip:
            res = report_query(survey_type = 'zip_code')
            return {"zipcode": res}, 201
        if food:
            res = report_query(survey_type = 'food_rating')
            return {"food_rating": res}, 201
        if env:
            res = report_query(survey_type = 'environment_rating')
            return {"env_rating": res}, 201
        if service:
            res = report_query(survey_type = 'service_rating')
            return {"service_rating": res}, 201
        if over_all:
            res = report_query(survey_type = 'over_all_rating')
            return {"over_all_serv_rating": res}, 201
        if wordcloud:
            query = "SELECT sur_comment FROM customer_survey"
            res = execute_read_query_dict(mysql_get_mydb(), query)
            df = json_normalize(res) 
            text = " ".join(i for i in df.sur_comment)
            stopwords = set(STOPWORDS)
            wordcloud = WordCloud(stopwords=stopwords, background_color="white").generate(text)
            wordcloud.to_file('N.png')
            im = Image.open("N.png")
            data = io.BytesIO()
            im.save(data, "PNG")
            encoded_img_data = base64.b64encode(data.getvalue())
            img_data=encoded_img_data.decode('utf-8')
            # return render_template('index.html', img_data=encoded_img_data.decode('utf-8'))
            return {"wordcloud_data": img_data}
        return {"message": "data not found"}, 404


if __name__ == '__main__':
    app.run(port=5000, debug=True)
