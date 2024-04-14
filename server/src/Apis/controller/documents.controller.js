const textFormatter = require("../../Helpers/textFormatter");
const services = require("../services/sql.services");
const errorHandling = require("../../Helpers/errorHandling");

module.exports = {
  createResume: (req, res) => {
    const fields =
      "resume_name, fullname, contact_number, email_address, resume_objective, tertiary_degree, tertiary_institution, tertiary_year_grad, tertiary_achievements, secondary_institution, secondary_year_grad, secondary_achievements, primary_institution, primary_year_grad, primary_achievements, language, language_proficiency, hobbies_interest, skills, skills_proficiency, ar_reward_name, ar_year_received, ar_issuer, ar_reward_description, project_title, project_year, project_desc, we_job_title, we_start_date, we_end_date, we_notable_achievement, reference_name, reference_relationship_to_you, reference_institution, reference_contact_info, fkid_profile";

    const format_values = {
      resume_name: req.body.resume_name,
      fullname: req.body.fullname,
      contact_number: req.body.contact_number,
      email_address: req.body.email_address,
      resume_objective: req.body.resume_objective,
      tertiary_degree: req.body.tertiary_degree,
      tertiary_institution: req.body.tertiary_institution,
      tertiary_year_grad: req.body.tertiary_year_grad,
      tertiary_achievements: req.body.tertiary_achievements,
      secondary_institution: req.body.secondary_institution,
      secondary_year_grad: req.body.secondary_year_grad,
      secondary_achievements: req.body.secondary_achievements,
      primary_institution: req.body.primary_institution,
      primary_year_grad: req.body.primary_year_grad,
      primary_achievements: req.body.primary_achievements,
      language: req.body.language,
      language_proficiency: req.body.language_proficiency,
      hobbies_interest: req.body.hobbies_interest,
      skills: req.body.skills,
      skills_proficiency: req.body.skills_proficiency,
      ar_reward_name: req.body.ar_reward_name,
      ar_year_received: req.body.ar_year_received,
      ar_issuer: req.body.ar_issuer,
      ar_reward_description: req.body.ar_reward_description,
      project_title: req.body.project_title,
      project_year: req.body.project_year,
      project_desc: req.body.project_desc,
      we_job_title: req.body.we_job_title,
      we_start_date: req.body.we_start_date,
      we_end_date: req.body.we_end_date,
      we_notable_achievement: req.body.we_notable_achievement,
      reference_name: req.body.reference_name,
      reference_relationship_to_you: req.body.reference_relationship_to_you,
      reference_institution: req.body.reference_institution,
      reference_contact_info: req.body.reference_contact_info,
      fkid_profile: req.body.fkid_profile,
    };

    const query_variables = {
      fields: fields,
      table_name: "tbl_resume",
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

  createDocuments: (req, res) => {
    const fields = "tor, psa, nbi, fkid_profile";

    const format_values = {
      tor: req.body.tor ? req.body.tor : "",
      psa: req.body.psa ? req.body.psa : "",
      nbi: req.body.nbi ? req.body.nbi : "",
      fkid_profile: req.body.fkid_profile,
    };

    const query_variables = {
      fields: fields,
      table_name: "tbl_documents",
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

  get_mines: (req, res) => {
    const query_variables = {
      id: req.params.profile_id,
    };

    services.get_all_my_documents(query_variables, (error, results) => {
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

  get_one_resume: (req, res) => {
    try {
      const query_variables = {
        fields: "*",
        table_name: "tbl_resume",
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

  patchResume: (req, res) => {
    const query_variables = {
      values: textFormatter.formatUpdate(
        Object.keys(req.body),
        Object.values(req.body)
      ),
      table_name: "tbl_resume",
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

  patchDocuments: (req, res) => {
    const query_variables = {
      values: textFormatter.formatUpdate(
        Object.keys(req.body),
        Object.values(req.body)
      ),
      table_name: "tbl_documents",
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
      table_name: "tbl_resume",
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
