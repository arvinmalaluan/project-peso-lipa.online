create database project_peso;

use project_peso;

create table tbl_role (
	id int not null auto_increment,
    role varchar(255),
    primary key(id)
);

insert into tbl_role(role) values("admin");
insert into tbl_role(role) values("seeker");
insert into tbl_role(role) values("recruiter");

create table tbl_account (
	id int not null auto_increment,
    username varchar(255) unique,
    email varchar(255) unique,
    password varchar(255) unique,
    recovery_email varchar(255) unique,
    created_at timestamp default current_timestamp,
    fkid_role int,
    primary key(id),
    foreign key(fkid_role) references tbl_role(id)
);

CREATE TABLE tbl_profile (
	id int not null AUTO_INCREMENT,
    image longtext,
    name varchar(255) not null,
    contact_number varchar(255),
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
);

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
    status varchar(255) default "application-received",
	location varchar(255) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    views int DEFAULT 0,
    fkid_profile int,
    PRIMARY KEY (id),
    FOREIGN KEY (fkid_profile) REFERENCES tbl_profile(id)
);

create table tbl_resume (
	id int not null AUTO_INCREMENT,
    resume_name varchar(255) not null,
    fullname varchar(255) not null,
    contact_number varchar(255) not null,
    email_address varchar(255) not null,
    resume_objective text not null,
    tertiary_degree varchar(255),
    tertiary_institution varchar(255),
    tertiary_year_grad varchar(255),
    tertiary_achievements varchar(255),
    secondary_institution varchar(255),
    secondary_year_grad varchar(255),
    secondary_achievements varchar(255),
    primary_institution varchar(255),
    primary_year_grad varchar(255),
    primary_achievements varchar(255),
    language text,
    language_proficiency text,
    hobbies_interest text,
    skills text not null,
    skills_proficiency text not null,
    ar_reward_name text not null,
    ar_year_received text not null,
    ar_issuer text not null,
    ar_reward_description text not null,
    project_title text not null,
    project_year text not null,
    project_desc text not null,
    we_job_title text not null,
    we_start_date text not null,
    we_end_date text not null,
    we_notable_achievement text not null,
    reference_name text not null,
    reference_relationship_to_you text not null,
    reference_institution text not null,
    reference_contact_info text not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    on_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    fkid_profile int,
    primary key (id),
    foreign key (fkid_profile) references tbl_profile(id)
);

CREATE TABLE tbl_applications(
	id int not null AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status varchar(255) not null,
    fkid_job_postings int not null,
    fkid_profile int not null,
    fkid_resume int not null,
    primary key(id),
    FOREIGN key (fkid_job_postings) REFERENCES tbl_job_postings(id),
    foreign key (fkid_profile) REFERENCES tbl_profile(id),
    foreign key (fkid_resume) REFERENCES tbl_resume(id)
);

create table tbl_documents (
	id int not null AUTO_INCREMENT,
    tor longtext null,
    psi longtext null,
    nbi longtext null,
    fkid_profile int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id),
    foreign key (fkid_profile) references tbl_profile(id)
);

create table tbl_interviews (
    id int not null auto_increment,
    interview_date date not null,
    interview_start_time time not null,
    venue varchar(1000) not null,
    reminders varchar(1000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fkid_company int,
    fkid_applicant int,
    primary key(id),
    foreign key(fkid_company) references tbl_profile(id),
    foreign key(fkid_applicant) references tbl_profile(id)
);