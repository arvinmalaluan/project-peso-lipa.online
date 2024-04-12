// index.js
const authRouter = require("./auth.router");
const profileRouter = require("./profile.router");
const jobPostingsRouter = require("./job.postings.router");
const applicationRouter = require("./applications.router");

module.exports = {
  authRouter,
  profileRouter,
  jobPostingsRouter,
  applicationRouter,
};
