require("dotenv").config();
const bcrypt = require("bcrypt");
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
      };

      const query_variables = {
        fields: "email, password, fkid_role",
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
                role: results[0].fkid_role,
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

  updateAccount: async (req, res) => {
    try {
      const queryVariables = {
        fields: "id, username, email, password, fkid_role",
        table_name: "tbl_account",
        condition: `email = '${req.body.email}';`,
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
                role: results[0].fkid_role,
                id: results[0].id,
              };
              const access_token = jwt.sign(
                user,
                process.env.ACCESS_TOKEN_SECRET
              );

              console.log(response);

              if (response.auth !== "valid") {
                return res.status(200).json({
                  success: 0,
                  message: response,
                });
              } else {
                const instance = req.body;
                instance["password"] = await userAuth.hashing(
                  req.body.new_password
                );
                delete instance["email"];
                delete instance["new_password"];

                const query_variables = {
                  values: textFormatter.formatUpdate(
                    Object.keys(instance),
                    Object.values(instance)
                  ),
                  table_name: "tbl_account",
                  id: req.params.id,
                };

                console.log(query_variables);

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
              }
            }
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

  getAccount: (req, res) => {
    const query_variables = {
      table_name: "tbl_account",
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
};
