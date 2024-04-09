tbl_role
- id
- role

tbl_account
- id
- fkid_role
- username
- email
- password
- recovery_email

CREATE TABLE tbl_profile (
	id int not null AUTO_INCREMENT,
    name varchar(255) not null,
    location varchar(255),
    bio varchar(5000),
    portfolio_link varchar(255),
    gender varchar(20) not null,
    educational_attainment varchar(255) not null,
    fb_link varchar(255),
    ig_link varchar(255),
    ln_link varchar(255),
    fkid_account int,
    PRIMARY KEY (id),
    FOREIGN KEY (fkid_account) REFERENCES tbl_account(id)
)

CREATE TABLE tbl_job_postings (
	id int AUTO_INCREMENT not null,
	job_title varchar(255) not null,
	employment_type varchar(255) not null,
	required_experience varchar(255) not null,
	required_education varchar(255) not null,
	job_description text not null,
	email_address varchar(255) not null,
	application_deadline TIMESTAMP not null,
	required_skills text not null,
	qualifications text not null,
	responsibilities text not null,
	benefits text not null,
	salary varchar(255) not null,
	location varchar(255) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fkid_profile int,
    PRIMARY KEY (id),
    FOREIGN KEY (fkid_profile) REFERENCES tbl_profile(id)
)