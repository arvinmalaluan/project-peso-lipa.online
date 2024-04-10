// index.js
const authRouter = require("./auth.router");
const profileRouter = require("./profile.router");
const jobPostingsRouter = require("./job.postings.router");

module.exports = {
  authRouter,
  profileRouter,
  jobPostingsRouter,
};
