from flask import Flask, jsonify, request
# from flask_restful import Api
from flask_cors import CORS 
from datetime import date, datetime
import flask 

from db import *


app = Flask(__name__)

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
                for i in res:
                    if i['join_date'] != None:
                        i['join_date'] = i['join_date'].strftime("%Y-%m-%d")
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
                for i in res:
                    if i['join_date'] != None:
                        i['join_date'] = i['join_date'].strftime("%m/%d/%Y")
                return {'employees': res}, 200
    if flask.request.method == 'POST':
        data = request.get_json()
        query = f"SELECT * FROM employee WHERE e_phone = '{data['phone']}'"
        res = execute_read_query(mysql_get_mydb(), query)
        if res:
            return {'message': "employee already exists in the database"}, 400
        insert = f"""
                INSERT INTO employee
                (e_first_name, e_last_name, e_phone, e_email, job_title, store_id) \
                VALUES('{data['first_name']}', '{data['last_name']}', '{data['phone']}', 
                '{data['email']}', '{data['position']}', '{data['store_id']}')"""
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
        if quit_checker:
            today = date.today().strftime("%m/%d/%Y")
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
    return {"message": "employee not found"}, 404

@app.route('/login', methods=['POST', 'PUT'])
def login():
    employee = request.args.get('employee', None)
    admin = request.args.get('admin', None)
    data = request.get_json()
    emp_id = request.args.get('id', None)
    if flask.request.method == 'POST':
        if employee:
            emp_query = f"SELECT * FROM employee_login WHERE emp_id = '{data['emp_id']}' AND password = '{data['password']}'"
            emp_res = execute_read_query(mysql_get_mydb(), emp_query)
            if emp_res:
                return {"login": "success"}, 200
        elif admin:
            position_query = f"SELECT job_title FROM employee WHERE emp_id = '{data['emp_id']}'"
            position_res = execute_read_query_dict(mysql_get_mydb(), position_query)
            position = position_res[0]['job_title']
            if position.lower() == 'manager':
                admin_query = f"SELECT * FROM employee_login WHERE emp_id = '{data['emp_id']}' AND password = '{data['password']}'"
                admin_res = execute_read_query(mysql_get_mydb(), admin_query)
                if admin_res:
                    return {"login": "success"}, 200
            else:
                return {"message": "premission denied"}, 401
        else:
            find_query = f"SELECT * FROM employee WHERE emp_id = '{data['emp_id']}'"
            find_res = execute_read_query(mysql_get_mydb(), find_query)
            if find_res:
                insert = f"INSERT INTO employee_login (emp_id, password) VALUES('{data['emp_id']}', '{data['password']}')"
                execute_query(mysql_get_mydb(), insert)
                return {"message": "record created"}, 201
            else: 
                return {"message": "employee not found"}, 404
        return {"login": "failed"}, 404
    if flask.request.method == 'PUT':
        if emp_id and data['password']:
            query = f"SELECT * FROM employee_login WHERE emp_id='{emp_id}'"
            res = execute_read_query(mysql_get_mydb(), query)
            if res:
                update = f"UPDATE employee_login SET password = '{data['password']}' WHERE emp_id = '{emp_id}'"
                execute_query(mysql_get_mydb(), update)
                return {"message": "record updated"}
            else:
                insert = f"INSERT INTO employee_login (emp_id, password) VALUES('{emp_id}', '{data['password']}')"
                execute_query(mysql_get_mydb(), insert)
                return {"message": "record created"}, 201
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
                    for i in res1:
                        if i['log_datetime'] != None:
                            i['log_datetime'] = i['log_datetime'].strftime("%Y-%m-%d")
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
            for i in all_res:
                        if i['log_datetime'] != None:
                            i['log_datetime'] = i['log_datetime'].strftime("%Y-%m-%d")
            return {"employee schedules": all_res}, 200
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
                        (emp_id, check_in_time) \
                        VALUES('{emp_id}', '{time}')"""
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
                get_time_query = f"SELECT check_in_time FROM employee_schedule WHERE emp_id = {emp_id}"
                res = execute_read_query_dict(mysql_get_mydb(), get_time_query)
                res[0]['check_in_time'] = datetime.strptime(
                                res[0]['check_in_time'], "%H:%M:%S")
                check_out_time = datetime.strptime(
                                time, "%H:%M:%S")
                total_time = check_out_time - res[0]['check_in_time']
                check_out_query = f"""UPDATE employee_schedule 
                                        SET check_out_time = '{time}',
                                            total_time = '{str(total_time)}'
                                        WHERE emp_id = '{emp_id}'"""
                execute_query(mysql_get_mydb(), check_out_query)
                return {"message": "check out successfull"}
            else:
                return {"message": "employee checked out already"}, 400
    return {"message": "employee not found"}, 404

# @app.route('/customer-survey', methods=['POST'])
# def cus_survey():
#     if flask.request.method == 'POST':
#         data = request.get_json()

if __name__ == '__main__':
    app.run(port=5000, debug=True)
