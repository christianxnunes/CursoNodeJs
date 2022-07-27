const chalk = require('chalk') //npm install chalk@4.1.2
const inquirer = require('inquirer') //npm install inquirer@8.1.0

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual seu nome?',
    },
    {
        name: 'idade',
        message: 'Qual a sua idade?',
    },
]).then((answers) => {
    if(!answers.nome || !answers.idade){
        throw new Error('O nome e a idade são obrigatórios!')
    }
    console.log(chalk.bgYellow.black(`Meu nome ${answers.nome} é tenho ${answers.idade} anos`))
}).catch(err => console.log(chalk.bgRed.black(err)))