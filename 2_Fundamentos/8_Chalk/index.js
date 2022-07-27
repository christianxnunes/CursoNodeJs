const chalk = require('chalk') //npm install chalk@4.1.2

const nota = 3

if(nota >= 7) {
    console.log(chalk.green('Parabén! Você está aprovado!'))
}else {
    console.log(chalk.bgRed.black('Você precisa fazer a prova de recuperação!'))
}