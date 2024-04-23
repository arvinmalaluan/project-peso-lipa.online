const textFormatter = require("../../Helpers/textFormatter");
const services = require("../services/sql.services");
const errorHandling = require("../../Helpers/errorHandling");

module.exports = {
  create: (req, res) => {
    try {
      const format_values = {
        fkid_job_postings: req.body.fkid_job_postings,
        fkid_profile: req.body.fkid_profile,
        fkid_resume: req.body.fkid_resume,
      };

      const fields = "fkid_job_postings, fkid_profile, fkid_resume";

      const query_variables = {
        fields: fields,
        table_name: "tbl_applications",
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
    } catch (e) {
      return res.status(500).json({
        error: e,
      });
    }
  },

  get_my: (req, res) => {
    try {
      const query_variables = {
        fields: "*",
        table_name: "tbl_applications",
        condition: `fkid_profile = ${req.params.fk}`,
      };

      services.get_w_condition(query_variables, (error, results) => {
        errorHandling.check_results(res, error, results);

        if (results.length !== 0) {
          return res.status(201).json({
            success: 1,
            message: "User profile found",
            results: results,
          });
        }
      });
    } catch (e) {
      return res.status(200).json({
        error: e,
      });
    }
  },

  get_one: (req, res) => {
    try {
      const query_variables = {
        fields: "*",
        table_name: "tbl_applications",
        id: req.params.id,
      };

      services.get_id(query_variables, (error, results) => {
        errorHandling.check_results(res, error, results);

        if (results.length !== 0) {
          return res.status(201).json({
            success: 1,
            message: "User profile found",
            results: results,
          });
        }
      });
    } catch (e) {
      return res.status(200).json({
        error: e,
      });
    }
  },

  get_all_custom: (req, res) => {
    try {
      const query_variables = {
        fk: req.params.fk,
      };

      services.get_all_my_applications(query_variables, (error, results) => {
        errorHandling.check_results(res, error, results);

        if (results.length !== 0) {
          return res.status(201).json({
            success: 1,
            message: "User profile found",
            results: results,
          });
        }
      });
    } catch (e) {
      return res.status(200).json({
        error: e,
      });
    }
  },

  update: (req, res) => {
    const query_variables = {
      values: textFormatter.formatUpdate(
        Object.keys(req.body),
        Object.values(req.body)
      ),
      table_name: "tbl_applications",
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

  delete: (req, res) => {
    const query_variables = {
      table_name: "tbl_applications",
      id: req.params.id,
    };

    services.delete_(query_variables, (error, results) => {
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
