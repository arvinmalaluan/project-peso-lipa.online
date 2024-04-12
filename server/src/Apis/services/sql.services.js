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

  get_id: (query_variables, return_message) => {
    db_conn.query(
      `SELECT * FROM ${query_variables.table_name} WHERE id = ${query_variables.id}`,
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

  patch_using_condition: (query_variables, callBack) => {
    db_conn.query(
      `UPDATE ${query_variables.table_name} SET ${query_variables.values} WHERE ${query_variables.condition}`,
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

  // ? Custom services
  get_jobpost_w_profile: (query_variables, call_back) => {
    db_conn.query(
      `
        SELECT tbl_profile.image,
                tbl_profile.name,
                tbl_profile.location,
                tbl_profile.bio,
                tbl_profile.portfolio_link,
                tbl_profile.gender,
                tbl_profile.educational_attainment,
                tbl_profile.fb_link,
                tbl_profile.ig_link,
                tbl_profile.ln_link,
                tbl_job_postings.id,
                tbl_job_postings.job_title,
                tbl_job_postings.employment_type,
                tbl_job_postings.required_experience,
                tbl_job_postings.required_education,
                tbl_job_postings.job_description,
                tbl_job_postings.email_address,
                tbl_job_postings.application_deadline,
                tbl_job_postings.required_skills,
                tbl_job_postings.qualifications,
                tbl_job_postings.responsibilities,
                tbl_job_postings.benefits,
                tbl_job_postings.salary,
                tbl_job_postings.location,
                tbl_job_postings.created_at,
                tbl_job_postings.views,
                tbl_job_postings.status
        FROM tbl_profile
        JOIN tbl_job_postings ON tbl_profile.id = tbl_job_postings.fkid_profile
        WHERE tbl_job_postings.id = ${query_variables.id};
      `,
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
