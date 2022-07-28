// Modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// Modulos internos
const fs = require('fs')

operation()

function operation() {
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'action',
                message: 'O que você deseja fazer?',
                choices: [
                    'Criar conta',
                    'Depositar',
                    'Consultar saldo',
                    'Sacar',
                    'Sair'
                ]
            },
        ]
    ).then((answer) => {
        const action = answer['action']

        if(action === 'Criar conta') {
            createAccount()
        }else if(action === 'Depositar') {
            deposit()
        }else if(action === 'Consultar saldo') {
            getAccountBalance()
        }else if(action === 'Sacar') {
            withdraw()
        }else if(action === 'Sair') {
            console.log(chalk.bgBlue.black('Volte sempre!'))
            process.exit()
        }
    }).catch((err) => console.log(err))
}

// Create an account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por nos escolher!'))
    console.log(chalk.green('Vamos definir as opções da sua conta a seguir'))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt(
        [
            {
                name: 'accountName',
                message: 'Digite seu nome para a sua conta:'
            }
        ]
    ).then((answer) => {
        const accountName = answer['accountName']
        
        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.info(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err) {
            console.log(err)
        })

        console.log(chalk.green(`Seja-bem vindo(a) a familha, ${accountName}!`))
        operation()
    }).catch((err) => console.log(err))
}

// Depositar na conta
function deposit() {
    inquirer.prompt(
        [
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?'
            }
        ]
    ).then((answer) => {
        const accountName = answer['accountName']
        if(!checkAccount(accountName)) {
            return deposit()
        }

        inquirer.prompt(
            [
                {
                    name: 'amount',
                    message: 'Digite o valor para depósito:'
                }
            ]
        ).then((answer) => {
            const amount = answer['amount']
            
            addAmount(accountName, amount)
            operation()

        }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
}

// Verificar se a conta existe
function checkAccount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não existe, digite outro nome!'))
        return false
    }
    return true
}

// Adicionar valor
function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)
    if(!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), function(err) {
            console.log(err)
        },
    )
    console.log(chalk.green(`Valor de R$${amount} depositado na sua conta!`))
}

// Buscar conta
function getAccount(accountName) {
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })
    return JSON.parse(accountJson)
}

// Listar valores
function getAccountBalance() {
    inquirer.prompt(
        [
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?'
            }
        ]
    ).then((answer) => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)
        console.log(chalk.bgBlue.black(`R$${accountData.balance}`))
        operation()

    }).catch((err) => console.log(err))
}

// withdraw an amount from user account
function withdraw() {
    inquirer.prompt(
        [
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?'
            }
        ]
    ).then((answer) => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)) {
            return withdraw()
        }

        inquirer.prompt(
            [
                {
                    name: 'amount',
                    message: 'Digite o valor desejado:'
                }
            ]
        ).then((answer) => {
            const amount = answer['amount']

            removeAmount(accountName, amount)               

        }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if(!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return withdraw()
    }

    if(accountData.balance < amount) {
        console.log(chalk.bgRed.black('Valor indisponivel!'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), function(err) {
        console.log(err)
        },
    )
    console.log(chalk.green(`R$${amount} sacado. Volte sempre!`))
    operation()
}