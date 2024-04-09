require("dotenv").config();

const userAuth = require("../../Helpers/userAuthentication");
const jwt = require("jsonwebtoken");
const textFormatter = require("../../Helpers/textFormatter");
const services = require("../services/sql.services");
const errorHandling = require("../../Helpers/errorHandling");

module.exports = {
  authSignup: async (req, res) => {
    try {
      const format_values = {
        email: req.body.email,
        password: await userAuth.hashing(req.body.password),
        fkid_role: req.body.fkid_role,
        recovery_email: req.body.recovery_email,
        username: req.body.username,
      };

      const query_variables = {
        fields: "email, password, fkid_role, recovery_email, username",
        table_name: "tbl_account",
        values: textFormatter
          .parseValues(Object.values(format_values))
          .join(", "),
      };

      services.post_(query_variables, (error, results) => {
        console.log(results);
        if (error) {
          return res.status(500).json({
            success: 0,
            message: "Error occurred during signup",
            error: error.message,
          });
        }

        res.status(200).json({
          success: 1,
          message: "Signup successful",
          data: results,
          insertId: results.insertId,
        });
      });
    } catch (error) {
      return res.status(500).json({
        success: 0,
        message: "Error occurred during signup",
        error: error.message,
      });
    }
  },

  authSignin: async (req, res) => {
    try {
      const queryVariables = {
        fields: "id, username, email, password, fkid_role",
        table_name: "tbl_account",
        condition: `email = '${req.body.email}' OR username = '${req.body.email}'`,
      };

      try {
        services.get_w_condition(queryVariables, async (error, results) => {
          try {
            errorHandling.check_results(res, error, results);

            if (results.length !== 0) {
              const response = await userAuth.signin(results, req.body);

              const username = req.body.email;
              const user = {
                name: username,
                role: results[0].role_fkid,
                id: results[0].id,
              };
              const access_token = jwt.sign(
                user,
                process.env.ACCESS_TOKEN_SECRET
              );

              if (response.auth !== "valid") {
                return res.status(200).json({
                  success: 0,
                  message: response,
                });
              } else {
                return res.status(200).json({
                  success: 1,
                  message: response,
                  token: access_token,
                });
              }
            }

            console.log(results);
          } catch (error) {
            console.error("Error occurred during sign in:", error);
            return res.status(500).json({
              success: 0,
              message: "Error occurred during sign in",
              error: error.message,
            });
          }
        });
      } catch (error) {
        return res.status(500).json({
          success: 0,
          message: "Error occurred during sign in",
          error: error.message,
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: 0,
        message: "Error occurred during sign in",
        error: error.message,
      });
    }
  },
};
