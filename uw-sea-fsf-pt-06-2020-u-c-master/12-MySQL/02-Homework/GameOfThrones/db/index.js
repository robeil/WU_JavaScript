'use strict';

const connection = require('./connection');

// module.exports = new DB(connection)

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllTitles() {
        return this.connection.query(
            `
        SELECT
            title.id,
            title.name AS Title,
            title.salary AS Salary,
            house.name AS House
        FROM
            title
        LEFT JOIN
            house ON title.house_id = house.id
        ORDER BY
            title.id;
        `
        );
    }


    viewAllCharacters() {
        return this.connection.query(
            `
        SELECT 
            characters.id AS Id,
            characters.first_name AS First_Name, 
            characters.last_name AS Last_Name, 
            title.name AS Title,
            house.name AS House, 
            title.salary AS Salary, 
            CONCAT(commander.first_name, ' ', commander.last_name) AS Commander
        FROM 
            characters
        LEFT JOIN
            title ON characters.title_id = title.id
        LEFT JOIN
            house ON title.house_id = house.id
        LEFT JOIN 
            characters commander ON commander.id = characters.commander_id
        ORDER BY
            House;
            `
        );
    }


    viewAllHouses() {
        return this.connection.query(
            `
        SELECT
            house.id,
            house.name
        FROM
            house
        ORDER BY
            house.id;
        `
        );
    }

    createCharacter(character) {
        return this.connection.query(
            `
        INSERT INTO
            characters
        SET
            ?
        `, character
        );
    }

    createTitle(title) {
        return this.connection.query(
            `
        INSERT INTO
            title
        SET
            ?
        `, title
        );
    }

    createHouse(house) {
        return this.connection.query(
            `
        INSERT INTO
            house
        SET
            ?
        `, house

        );
    }

    updateCharacterTitle(titleId, characterId) {
        return this.connection.query(
            `
        UPDATE 
            characters
        SET
            title_id = ?
        WHERE
            id = ?
        `, [titleId, characterId]
        );
    }

}

module.exports = new DB(connection)