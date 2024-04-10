const textFormatter = require("../../Helpers/textFormatter");
const services = require("../services/sql.services");
const errorHandling = require("../../Helpers/errorHandling");

module.exports = {
  create: (req, res) => {
    try {
      const format_values = {
        name: req.body.name,
        location: req.body.location,
        bio: req.body.bio,
        portfolio_link: req.body.portfolio_link,
        gender: req.body.gender,
        educational_attainment: req.body.educational_attainment,
        fb_link: req.body.fb_link,
        ig_link: req.body.ig_link,
        ln_link: req.body.ln_link,
        fkid_account: req.body.fkid_account,
      };

      const fields =
        "name, location, bio, portfolio_link, gender, educational_attainment, fb_link, ig_link, ln_link, fkid_account";

      const query_variables = {
        fields: fields,
        table_name: "tbl_profile",
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

  get: (req, res) => {
    try {
      const query_variables = {
        fields: "*",
        table_name: "tbl_profile",
        condition: `fkid_account = ${req.params.id}`,
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

  update: (req, res) => {
    const query_variables = {
      values: textFormatter.formatUpdate(
        Object.keys(req.body),
        Object.values(req.body)
      ),
      table_name: "tbl_profile",
      condition: `fkid_account = ${req.params.id}`,
    };

    services.patch_using_condition(query_variables, (error, results) => {
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
