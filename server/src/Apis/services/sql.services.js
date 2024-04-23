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
                tbl_job_postings.status,
                tbl_applications.id as application_id,
                tbl_applications.fkid_profile as applicant_id,
                tbl_applications.status as application_status
        FROM tbl_profile
        JOIN tbl_job_postings ON tbl_profile.id = tbl_job_postings.fkid_profile
        LEFT JOIN tbl_applications ON tbl_applications.fkid_job_postings = tbl_job_postings.id
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

  get_all_jobpost_w_profile: (query_variables, call_back) => {
    db_conn.query(
      `
        SELECT tbl_profile.image,
                tbl_profile.name,
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

  get_all_my_documents: (query_variables, call_back) => {
    db_conn.query(
      `SELECT d.*, GROUP_CONCAT(CONCAT_WS('|', r.id, r.resume_name)) AS "resume_data"
      FROM tbl_profile p
      LEFT JOIN tbl_documents d ON p.id = d.fkid_profile
      LEFT JOIN tbl_resume r ON p.id = r.fkid_profile
      WHERE p.id = ${query_variables.id};`,
      [],
      (error, results, fields) => {
        if (error) {
          return call_back(error);
        }

        return call_back(null, results);
      }
    );
  },

  get_all_my_applications: (query_variables, call_back) => {
    db_conn.query(
      `SELECT 
        app.id as application_id, 
        app.created_at as date_applied, 
        prof.image as company_profile,
        prof.name as company_name,
        post.employment_type as type,
        post.job_title as position,
        post.id as post_id,
        app.status as status
        FROM tbl_applications as app
        JOIN tbl_job_postings as post ON post.id = app.fkid_job_postings
        JOIN tbl_profile as prof ON prof.id = post.fkid_profile
        WHERE app.fkid_profile = ${query_variables.fk};`,
      [],
      (error, results, fields) => {
        if (error) {
          return call_back(error);
        }

        return call_back(null, results);
      }
    );
  },

  get_my_job_posts: (query_variables, call_back) => {
    db_conn.query(
      `SELECT DISTINCT jp.id, jp.job_title, jp.job_description, jp.status, jp.created_at, jp.application_deadline, jp.fkid_profile as poster_id, COUNT(*) OVER (PARTITION BY jp.id) AS application_count
      FROM tbl_job_postings as jp
      LEFT JOIN tbl_applications ON tbl_applications.fkid_job_postings = jp.id
      WHERE ${query_variables.condition};`,
      [],
      (error, results, fields) => {
        if (error) {
          return call_back(error);
        }

        return call_back(null, results);
      }
    );
  },

  get_all_applicants: (query_variables, call_back) => {
    const range = query_variables.range.substring(
      1,
      query_variables.range.length - 1
    );

    db_conn.query(
      `select app.created_at, app.status, jp.job_title,
      p.contact_number,
      p.id,
      p.image,
      p.ln_link,
      p.location,
      p.name,
      app.id as app_id
      from tbl_applications as app
      join tbl_job_postings as jp on app.fkid_job_postings = jp.id
      join tbl_profile as p on app.fkid_profile = p.id
      where fkid_job_postings in (${range});`,
      [],
      (error, results, fields) => {
        if (error) {
          return call_back(error);
        }

        return call_back(null, results);
      }
    );
  },

  get_candidates: (query_variables, call_back) => {
    db_conn.query(
      `SELECT DISTINCT tbp.*, tbr.tertiary_degree
      FROM tbl_profile as tbp
      JOIN tbl_account as tba ON tbp.fkid_account = tba.id
      JOIN tbl_resume as tbr ON tbr.fkid_profile = tbp.id`,
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
