CREATE DATABASE
IF NOT EXISTS  burger_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
    );


