require('dotenv').config();

const express = require('express');

const assignmentsRouter = require('./routes/assignments');

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/assignments', assignmentsRouter);

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});