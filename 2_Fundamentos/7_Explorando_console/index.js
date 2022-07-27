const x = 10
const y = 'Christian'
const z = [1, 2]

console.log(x, y, z)

// Contagem de impressões
console.count(`o valor de x é ${x}, contagem`)
console.count(`o valor de x é ${x}, contagem`)
console.count(`o valor de x é ${x}, contagem`)
console.count(`o valor de x é ${x}, contagem`)

// Variavel entre string
console.log("o nome é %s, ele é programador", y)

// Limpar console
setTimeout(() => {
console.clear()
    
}, 2000);