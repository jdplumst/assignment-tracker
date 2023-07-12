require("dotenv").config();

const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const assignmentsRoutes = require("./routes/assignments");
const userRoutes = require("./routes/user");

const app = express();

app.use(
  cors({ origin: [process.env.DEV_CLIENT_URL, process.env.PROD_CLIENT_URL] })
);
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/assignments", assignmentsRoutes);
app.use("/api/user", userRoutes);
