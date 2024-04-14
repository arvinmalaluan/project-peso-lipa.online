// index.js
const authRouter = require("./auth.router");
const profileRouter = require("./profile.router");
const jobPostingsRouter = require("./job.postings.router");
const applicationRouter = require("./applications.router");
const documentsRouter = require("./documents.router");

module.exports = {
  authRouter,
  profileRouter,
  jobPostingsRouter,
  applicationRouter,
  documentsRouter,
};
