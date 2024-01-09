-- USING POSTGRES SQL DIALECT

-- drop all tables by dropping public schema
DROP SCHEMA public CASCADE;

-- recreate the public schema
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO wwc-apac; -- give back permission to our POSTGRES_USER
GRANT ALL ON SCHEMA public TO public;

-- Tables 
CREATE TABLE user (
    username varchar(32) NOT NULL,
    password varchar(32) NOT NULL,
    name varchar(32) NOT NULL,
    PRIMARY KEY (username)
);