DROP DATABASE IF EXISTS got_characters;
CREATE DATABASE got_characters;

USE got_characters;

CREATE TABLE house (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE title (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
    salary INT NOT NULL,
    house_id INT UNSIGNED NOT NULL,
    INDEX house_id (house_id),
    CONSTRAINT fk_house FOREIGN KEY (house_id) REFERENCES house(id) ON DELETE CASCADE
);

CREATE TABLE characters (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title_id INT UNSIGNED NOT NULL,
    INDEX title_id (title_id),
    CONSTRAINT fk_title FOREIGN KEY (title_id) REFERENCES title(id) ON DELETE CASCADE,
    commander_id INT UNSIGNED,
    INDEX commander_id (commander_id),
    CONSTRAINT fk_commander FOREIGN KEY (commander_id) REFERENCES characters(id) ON DELETE SET NULL
);