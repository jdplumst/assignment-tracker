# Project Description

This app can be found at https://assignment-tracker-two.vercel.app/login

An Assignment Tracker app that allows users to record school assignments for their classes and their due dates.

![image](https://user-images.githubusercontent.com/30222503/214496117-3f864aa1-591e-4ac6-9ec9-ae424a121e24.png)

![image](https://user-images.githubusercontent.com/30222503/214495930-1c170046-5d6a-483c-987b-817cebc15029.png)

![image](https://user-images.githubusercontent.com/30222503/214495985-50a5a7c4-40a3-45e2-b3b6-b29524d4cd66.png)

## Built With

- Mongoose
- Express
- Node.js
- React
- TypeScript (Frontend)
- JavaScript (Backend)
- TailwindCSS

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

5. Add Mongo URI, Port number 4000, and JWT Secret key to .env file

   ```
   PORT=[4000]
   MONGO_URI=[insert MONGO URI here]
   SECRET=[insert JWT Secret key here] (e.g. SECRET=secret)
   ```

6. Run project and run in two separate terminals:

   ```
   cd server
   node server.js
   ```

   ```
   cd client
   npm start
   ```
