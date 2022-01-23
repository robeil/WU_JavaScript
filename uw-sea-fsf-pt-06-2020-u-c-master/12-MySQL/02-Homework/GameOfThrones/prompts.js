module.exports = {

    mainPrompt: [
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View All Characters',
                    value: 'View_Characters'
                },
                {
                    name: 'Add Character',
                    value: 'Add_Character'
                },
                {
                    name: 'Update Character Title',
                    value: 'Update_Character_Title'
                },
                {
                    name: 'View All Titles',
                    value: 'View_Titles'
                },
                {
                    name: 'Add Title',
                    value: 'Add_Title'
                },
                {
                    name: 'View All Houses',
                    value: 'View_Houses'
                },
                {
                    name: 'Add House',
                    value: 'Add_House'
                },
                {
                    name: 'Quit',
                    value: 'Quit'
                }
            ]
        }
    ],

    addCharacter: [
        {
            type: 'input',
            name: 'first_Name',
            message: 'What is your characters first name?',
        },
        {
            type: 'input',
            name: 'last_Name',
            message: 'What is your characters last name?',
        },
    ],
}