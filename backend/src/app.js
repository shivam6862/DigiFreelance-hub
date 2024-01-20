const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin:
      "https://shivam-digifreelance-hub.vercel.app" ||
      process.env.FRONTEND_URL ||
      "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.static(__dirname + "/uploads/"));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://shivam-digifreelance-hub.vercel.app" ||
      process.env.FRONTEND_URL ||
      "*"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization,AuthToken"
  );
  next();
});

routes.forEach((route) => app[route.method](route.path, route.handler));

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then((result) => {
    app.listen(8080);
    console.log("Connected to 8080!");
  })
  .catch((err) => {
    console.log(err);
  });
