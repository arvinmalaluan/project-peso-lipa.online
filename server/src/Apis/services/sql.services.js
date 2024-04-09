const db_conn = require("../../Config/db.conn");

module.exports = {
  get_all: (query_variables, return_message) => {
    db_conn.query(
      `SELECT ${query_variables.fields} FROM ${query_variables.table_name} `,
      [],
      (error, results, fields) => {
        if (error) {
          return return_message(error);
        }

        return return_message(null, results);
      }
    );
  },

  get_w_condition: (query_variables, return_message) => {
    db_conn.query(
      `SELECT ${query_variables.fields} FROM ${query_variables.table_name} WHERE ${query_variables.condition}`,
      [],
      (error, results, fields) => {
        if (error) {
          return return_message(error);
        }
        console.log(results);
        return return_message(null, results);
      }
    );
  },

  post_: (query_variables, callBack) => {
    db_conn.query(
      `INSERT INTO ${query_variables.table_name}(${query_variables.fields}) VALUES (${query_variables.values})`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  patch_: (query_variables, callBack) => {
    db_conn.query(
      `UPDATE ${query_variables.table_name} SET ${query_variables.values} WHERE id = ${query_variables.id}`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  delete_: (query_variables, call_back) => {
    db_conn.query(
      `
      DELETE FROM ${query_variables.table_name}
      WHERE id = ${query_variables.id}`,
      [],
      (error, results, fields) => {
        if (error) {
          return call_back(error);
        }

        return call_back(null, results);
      }
    );
  },
};
