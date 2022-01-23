'use strict';

const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts')
const db = require('./db');
require('console.table');



async function init() {
    const logoText = logo({ name: 'Game Of Thrones' }).render();
    console.log(logoText);

    mainPrompt();
};

async function mainPrompt() {

    const { choice } = await inquirer.prompt(prompts.mainPrompt);

    switch (choice) {
        case 'View_Characters':
            return viewAllCharacters();
        case 'Add_Character':
            return addCharacter();
        case 'Update_Character_Title':
            return updateCharacterTitle();
        case 'View_Titles':
            return viewAllTitles();
        case 'Add_Title':
            return addTitle();
        case 'View_Houses':
            return viewAllHouses();
        case 'Add_House':
            return addHouse();
        case 'Quit':
            return quit();
        default:
            return quit();
    };
};

async function viewAllCharacters() {

    const characters = await db.viewAllCharacters();

    console.log('\n');
    console.table(characters);

    mainPrompt();
};

async function viewAllTitles() {

    const titles = await db.viewAllTitles();

    console.log('\n');
    console.table(titles);

    mainPrompt();
};


async function viewAllHouses() {

    const houses = await db.viewAllHouses();

    console.log('\n');
    console.table(houses);

    mainPrompt();
};

async function addCharacter() {

    const titles = await db.viewAllTitles();
    const characters = await db.viewAllCharacters();

    const character = await inquirer.prompt(prompts.addCharacter)

    const titleChoices = titles.map(({ id, Title }) => ({
        name: Title,
        value: id
    }));

    const { titleId } = await inquirer.prompt({
        type: 'list',
        name: 'titleId',
        message: 'What is your characters title?',
        choices: titleChoices
    })

    character.title_id = titleId;

    const commanderChoices = characters.map(({ Id, First_Name, Last_Name }) => ({
        name: `${First_Name} ${Last_Name}`,
        value: Id
    }));
    commanderChoices.unshift({ name: 'None', value: null });

    const { commanderId } = await inquirer.prompt({
        type: 'list',
        name: 'commanderId',
        message: 'Who is your characters commander?',
        choices: commanderChoices
    });

    character.commander_id = commanderId;

    await db.createCharacter(character);
    console.log(
        `Added ${character.First_Name} ${character.Last_Name} to the board`
    );

    mainPrompt();
}

async function updateCharacterTitle() {

    const characters = await db.viewAllCharacters();

    const characterChoices = characters.map(({ Id, First_Name, Last_Name }) => ({
        name: `${First_Name} ${Last_Name}`,
        value: Id
    }));

    const { characterId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'characterId',
            message: 'Which characters title do you want to update?',
            choices: characterChoices
        }
    ]);

    const titles = await db.viewAllTitles();

    const titleChoices = titles.map(({ id, Title }) => ({
        name: Title,
        value: id
    }));

    const { titleId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'titleId',
            message: 'Which title do you want to assign to the selected character?',
            choices: titleChoices
        }
    ]);

    await db.updateCharacterTitle(titleId, characterId);

    console.log(`Updated characters title`);

    mainPrompt();

}

async function addTitle() {

    const houses = await db.viewAllHouses();

    const houseChoices = houses.map(({ id, name }) => ({
        name: name,
        value: id
    }));

    const title = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the title?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'what is the salary of the title?'
        },
        {
            type: 'list',
            name: 'house_id',
            message: 'To which house do you belong?',
            choices: houseChoices
        }
    ]);


    await db.createTitle(title);

    console.log(`Added ${title.name} to the database`);

    mainPrompt();
}

async function addHouse() {

    const house = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the house?'
        }
    ]);

    await db.createHouse(house);

    console.log('New house created!');

    mainPrompt();
}

async function quit() {

    console.log('Goodbye!');
    process.exit();
}

init();