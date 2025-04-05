# SmartAgro: Intelligent Agriculture Solutions

## Overview

SmartAgro is a comprehensive solution designed to assist farmers in making informed decisions regarding crop and fertilizer recommendations. By leveraging machine learning models and a user-friendly API, SmartAgro provides data-driven insights to optimize agricultural practices.

## Features

-   **User Authentication:** Secure user registration and login functionality using Flask-Bcrypt and JWT.
-   **Crop Recommendation:** Recommends the most suitable crop based on environmental factors and soil conditions.
-   **Fertilizer Recommendation:** Suggests the optimal fertilizer type based on soil and crop characteristics.
-   **API Endpoints:**
    -   `/register`: Registers a new user.
    -   `/login`: Authenticates an existing user and returns a JWT token.
    -   `/recommend`: Provides crop recommendations based on input parameters.
    -   `/predict`: Provides fertilizer recommendations based on input parameters.

## Technologies Used

-   **Flask:** A micro web framework for building the API.
-   **Flask-PyMongo:** Integrates MongoDB with Flask for database operations.
-   **Flask-Bcrypt:** Used for password hashing and security.
-   **Flask-JWT-Extended:** Provides JWT authentication for API security.
-   **Flask-CORS:** Enables Cross-Origin Resource Sharing (CORS) for the API.
-   **Pandas:** Used for data manipulation and analysis.
-   **Pickle:** Used for serializing and deserializing machine learning models.
-   **MongoDB:** A NoSQL database to store user information.

## Machine Learning Models

### Crop Recommendation Model

-   **Model Type:** The specific type of model used for crop recommendation (e.g., Random Forest, Support Vector Machine) should be specified here.
-   **Features Used:** N, P, K, Temperature, Humidity, pH, Rainfall
-   **Accuracy:** \[Insert Accuracy Percentage]% (This is an estimated value.  You need to measure the accuracy of your model using a validation dataset.)
-   **Description:** This model predicts the most suitable crop to grow based on the provided environmental and soil conditions.

### Fertilizer Recommendation Model

-   **Model Type:** The specific type of model used for fertilizer recommendation (e.g., Random Forest, Support Vector Machine) should be specified here.
-   **Features Used:** Temperature, Humidity, Moisture, Soil\_Type, Crop\_Type, Nitrogen, Potassium, Phosphorous
-   **Accuracy:** \[Insert Accuracy Percentage]% (This is an estimated value. You need to measure the accuracy of your model using a validation dataset.)
-   **Description:** This model predicts the optimal fertilizer type based on soil composition, environmental conditions, and the type of crop being grown.

*Note: The accuracy values provided above are placeholders. You will need to evaluate your models on a held-out test set to determine their actual performance.*

## Setup and Installation

1.  **Clone the Repository:**

    ```
    git clone [repository-url]
    cd [repository-directory]
    ```

2.  **Install Dependencies:**

    ```
    pip install flask flask_pymongo flask_bcrypt flask_jwt_extended flask_cors pandas scikit-learn
    ```

3.  **Set up MongoDB:**

    -   Ensure MongoDB is installed and running on your local machine.
    -   Update the MongoDB URI in `app.py` if necessary.

    ```
    app.config['MONGO_URI'] = 'mongodb://localhost:27017/AgricultureDB'
    ```

4.  **Load Machine Learning Models:**

    -   Place the `crop_recommendation_model.pkl` and `fertilizer_recommendation_model.pkl` and `fertilizer.pkl` files in the same directory as `app.py`.

5.  **Run the Application:**

    ```
    python app.py
    ```

    The API will start running on `http://localhost:5000`.

## API Endpoints

### 1. Register

-   **Endpoint:** `/register`
-   **Method:** POST
-   **Request Body:**

    ```
    {
      "email": "user@example.com",
      "password": "secure_password"
    }
    ```

-   **Response:**

    ```
    {
      "message": "User registered successfully"
    }
    ```

### 2. Login

-   **Endpoint:** `/login`
-   **Method:** POST
-   **Request Body:**

    ```
    {
      "email": "user@example.com",
      "password": "secure_password"
    }
    ```

-   **Response (Success):**

    ```
    {
      "token": "JWT access token"
    }
    ```

-   **Response (Failure):**

    ```
    {
      "message": "Invalid credentials"
    }
    ```

### 3. Crop Recommendation

-   **Endpoint:** `/recommend`
-   **Method:** POST
-   **Request Body:**

    ```
    {
      "N": 50,
      "P": 50,
      "K": 50,
      "Temperature": 25.0,
      "Humidity": 70.0,
      "ph": 6.0,
      "Rainfall": 100.0
    }
    ```

-   **Response:**

    ```
    {
      "recommendation": "crop_name"
    }
    ```

### 4. Fertilizer Recommendation

-   **Endpoint:** `/predict`
-   **Method:**  POST
-   **Request Body:**

    ```
    {
      "Temperature": 20,
      "Humidity": 83,
      "Moisture": 26,
      "Soil_Type": "Clayey",
      "Crop_Type": "rice",
      "Nitrogen": 90,
      "Potassium": 49,
      "Phosphorous": 36
    }
    ```

-   **Response:**

    ```
    {
      "recommendation": "Urea"
    }
    ```

## CORS Configuration

CORS is enabled for all routes by default. To restrict CORS to specific origins, modify the `CORS` configuration in `app.py`.

