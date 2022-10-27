-- Todo need to Create/drop DB 
-- Todo Create table for the Scores
-- Todo Create table for the Users information
-- Todo Create possibly Second DB for the Input information** (this would be for the Messaging board)
DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

