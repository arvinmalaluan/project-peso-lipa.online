const textFormatter = require("../../Helpers/textFormatter");
const services = require("../services/sql.services");
const errorHandling = require("../../Helpers/errorHandling");

module.exports = {
  create: (req, res) => {
    const fields =
      "job_title, employment_type, required_experience, required_education, job_description, email_address, application_deadline, required_skills, qualifications, responsibilities, benefits, salary, location, fkid_profile";

    const format_values = {
      job_title: req.body.job_title,
      employment_type: req.body.employment_type,
      required_experience: req.body.required_experience,
      required_education: req.body.required_education,
      job_description: req.body.job_description,
      email_address: req.body.email_address,
      application_deadline: req.body.application_deadline,
      required_skills: req.body.required_skills,
      qualifications: req.body.qualifications,
      responsibilities: req.body.responsibilities,
      benefits: req.body.benefits,
      salary: req.body.salary,
      location: req.body.location,
      fkid_profile: req.body.fkid_profile,
    };

    const query_variables = {
      fields: fields,
      table_name: "tbl_job_postings",
      values: textFormatter
        .parseValues(Object.values(format_values))
        .join(", "),
    };

    services.post_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(201).json({
          success: 1,
          message: "Created Successfully",
          results: results,
        });
      }
    });
  },

  get: (req, res) => {
    const query_variables = {};

    services.get_all_jobpost_w_profile(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(201).json({
          success: 1,
          message: "Created Successfully",
          results: results,
        });
      }
    });
  },

  getWProfile: (req, res) => {
    const query_variables = {
      id: req.params.id,
    };

    services.get_jobpost_w_profile(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(201).json({
          success: 1,
          message: "Created Successfully",
          results: results,
        });
      }
    });
  },

  get_using_id: (req, res) => {
    const query_variables = {
      fields: "*",
      table_name: "tbl_job_postings",
      id: req.params.id,
    };

    services.get_id(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(201).json({
          success: 1,
          message: "Created Successfully",
          results: results,
        });
      }
    });
  },

  get_using_fk: (req, res) => {
    const query_variables = {
      fields: "*",
      table_name: "tbl_job_postings",
      condition: `fkid_profile = ${req.params.fk}`,
    };

    services.get_w_condition(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(201).json({
          success: 1,
          message: "Results found",
          results: results,
        });
      }
    });
  },

  patch: (req, res) => {
    const query_variables = {
      values: textFormatter.formatUpdate(
        Object.keys(req.body),
        Object.values(req.body)
      ),
      table_name: "tbl_job_postings",
      id: req.params.id,
    };

    services.patch_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(200).json({
          success: 1,
          message: "Updated Successfully",
          results: results,
        });
      }
    });
  },
};
