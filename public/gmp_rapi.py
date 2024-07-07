from flask import Flask, jsonify, request
import pymysql  # type: ignore
import json

app = Flask(__name__)

# MySQL Configuration
DB_HOST = 'gmp.cynua1rtphhh.us-east-1.rds.amazonaws.com'
DB_USER = 'admin'
DB_PASSWORD = '16db7[yOEeiBL#?]<+>ZR:S_A<!V'
DB_NAME = 'gmp_users'

def get_db_connection():
    return pymysql.connect(host=DB_HOST, user=DB_USER, password=DB_PASSWORD, db=DB_NAME, cursorclass=pymysql.cursors.DictCursor)

@app.route('/')
def index():
    return jsonify({'message': 'Hello, World!'})

@app.route('/Users')
def Users():
    return jsonify({'name': 'Alice', 'email': 'alice@example.com'})

@app.route('/post', methods=['POST', 'DELETE', 'PUT'])
def handle_requests():
    if request.method == 'POST':
        # Handle POST request
        data = request.get_json()  # Get JSON data from the request
        # Process the data and return a response
        print(data)
        return jsonify({'message': 'Data received successfully!'})

    elif request.method == 'DELETE':
        # Handle DELETE request
        # Implement your logic here
        return jsonify({'message': 'Resource deleted successfully!'})

    elif request.method == 'PUT':
        # Handle PUT request
        # Implement your logic here
        return jsonify({'message': 'Resource updated successfully!'})
    
@app.route('/api/data', methods=['POST'])
def add_data():
    try:
        # Get data from the request
        data = request.json
        print(data)  # Check the data received from the client
        
        # Extract only the value from the JSON data
        firstname = data['firstname']
        lastname = data['lastname']
        companyname = data['companyname']
        email = data['email']
        phone = data['phone']
        street1 = data['street1']
        street2 = data['street2']
        city = data['city']
        state = data['state']
        zip = data['zip']
        userdata = (firstname,lastname,companyname,email,phone,street1,street2,city,state,zip)

        # Establish connection with the database
        connection = get_db_connection()

        # Create a cursor and execute the query
        with connection.cursor() as cursor:
            # Construct the SQL query dynamically
            sql = "INSERT INTO users (firstname,lastname,companyname,email,phone,street1,street2,city,state,zip) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
            #sql = "INSERT INTO users (state) VALUES (%s)"
            # Use string formatting to insert column names
            cursor.execute(sql, userdata)
            connection.commit()

        connection.close()

        print(userdata)
        

        return jsonify({'message': 'Data added successfully'}), 201
    except Exception as e:
        return jsonify({'help': str(e)}), 500
    

@app.route('/api/data/table', methods=['POST'])
def create_table():
    try:
        connection = get_db_connection()
        with connection.cursor() as cursor:
            cursor.execute('DROP TABLE IF EXISTS `users`')
            connection.commit()
            cursor.execute('''
                CREATE TABLE `users` (
                    `email` VARCHAR(255) NOT NULL ,
                    `firstname` VARCHAR(255) ,
                    `lastname` VARCHAR(255) ,
                    `companyName` VARCHAR(255) ,
                    `phone`  VARCHAR(255) ,
                    `street1` VARCHAR(255) NOT NULL ,
                    `street2` VARCHAR(255) ,
                    `city` VARCHAR(255) ,
                    `state` VARCHAR(255) ,
                    `zip` VARCHAR(255),
                    `usage` VARCHAR(255),
                     PRIMARY KEY (email)
                );
            ''')
            connection.commit()
    finally:
        connection.close()
        print("Database connection closed. YAYY!!")
        
# ... other routes ...

if __name__ == '__main__':
    app.run(host='0.0.0.0')
