const inquirer = require('inquirer') // npm install inquirer@8.1.0

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?',
    },
]).then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
    console.log(`A média é: ${media}`)
}).catch(err => console.log(err))