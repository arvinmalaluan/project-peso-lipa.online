const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/Apis/router");
const http = require("http");

const app = express();
const server = http.createServer(app);

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Body parser middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.use("/api/v1/https/auth", routes.authRouter); // --------------> For Authentication Related Routes
app.use("/api/v1/https/profile", routes.profileRouter); // --------> For Authentication Related Routes
app.use("/api/v1/https/jobpost", routes.jobPostingsRouter); // ----> For Authentication Related Routes
app.use("/api/v1/https/apply", routes.applicationRouter); // ------> For Authentication Related Routes

module.exports = { server };
