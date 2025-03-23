from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from flask_cors import CORS  # Import CORS
import pandas as pd
import pickle

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)  # This will allow all domains by default

# Alternatively, you can specify CORS options, e.g., allowing only a specific domain:
# CORS(app, origins=["http://localhost:3000"])  # Allow only localhost:3000

# Configuration
app.config['MONGO_URI'] = 'mongodb://localhost:27017/AgricultureDB'
app.config['JWT_SECRET_KEY'] = 'smart_agro'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Load ML model
with open('crop_recommendation_model.pkl', 'rb') as model_file:
    model2 = pickle.load(model_file)

# User registration
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = {'email': data['email'], 'password': hashed_password}
    mongo.db.users.insert_one(user)
    return jsonify({'message': 'User registered successfully'}), 201

# User login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = mongo.db.users.find_one({'email': data['email']})
    if user and bcrypt.check_password_hash(user['password'], data['password']):
        access_token = create_access_token(identity={'email': user['email']})
        return jsonify({'token': access_token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

# Crop recommendation
@app.route('/recommend', methods=['POST'])
# @jwt_required()
def recommend():
    data = request.json

    # Check if all required fields are present
    required_fields = ['N', 'P', 'K', 'Temperature', 'Humidity', 'ph', 'Rainfall']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing required field: {field}'}), 422

    # Try to convert values to float and handle errors
    try:
        features = [
            [float(data['N']),
            float(data['P']),
            float(data['K']),
            float(data['Temperature']),
            float(data['Humidity']),
            float(data['ph']),
            float(data['Rainfall'])]
        ]
    except ValueError:
        return jsonify({'error': 'Invalid value type in input data. Ensure all values are numbers.'}), 422

    # Prediction (assuming your model is loaded correctly)
    prediction = model2.predict(features)
    return jsonify({'recommendation': prediction[0]}), 200

with open('fertilizer_recommendation_model.pkl', 'rb') as model1_file:
    model1 = pickle.load(model1_file)
with open('fertilizer.pkl', 'rb') as ferti_file:
    ferti = pickle.load(ferti_file)


@app.route('/predict',methods=['POST'])
def predict():

    data=request.json

    required_fields = ['Temperature', 'Humidity', 'Moisture', 'Soil_Type', 'Crop_Type', 'Nitrogen', 'Potassium','Phosphorous']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing required field: {field}'}), 422

    # Try to convert values to float and handle errors
    try:
        features = [
            [ int(data['Temperature']),
            int(data['Humidity']),
            int(data['Moisture']),
            int(data['Soil_Type']),
            int(data['Crop_Type']),
            int(data['Nitrogen']),
            int(data['Potassium']),
            int(data['Phosphorous'])]
        ]
        print(features)
    except ValueError:
        return jsonify({'error': 'Invalid value type in input data. Ensure all values are numbers.'}), 422

    # Prediction (assuming your model is loaded correctly)
    prediction =ferti.classes_[model1.predict(features)]
    print(prediction[0])
    return jsonify({'recommendation': prediction[0]}), 200

if __name__ == '__main__':
    app.run(debug=True)
