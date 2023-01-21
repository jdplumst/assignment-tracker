# Project Description

An Assignment Tracker app that allows users to record school assignments for their classes and their due dates.

![image](https://user-images.githubusercontent.com/30222503/213830140-f442ab4e-1bcd-4082-829d-fc9397cf0ec4.png)

## Built With

* Mongoose
* Express
* Node.js
* React
* TypeScript (Frontend)
* JavaScript (Backend)

## Getting Started

Instructions on setting this project up locally and running it.

1. Get a Mongo URI from https://cloud.mongodb.com

2. Clone the repo

    ```
    git clone https://github.com/jdplumst/assignment-tracker.git
    ```

3. Install NPM packages

    ```
    cd server
    npm install
    ```
    ```
    cd client
    npm install
    ```

4. Create .env file

    ```
    cd server
    touch .env
    ```

5. Add Mongo URI and Port number to .env file

    ```
    PORT=[insert PORT number here (e.g. 4000)]
    MONGO_URI=[insert MONGO URI here]
    ```

6. Run project and run in two separate terminals:

    ```
    cd server
    npm run dev
    ```
    ```
    cd client
    npm start
    ```
