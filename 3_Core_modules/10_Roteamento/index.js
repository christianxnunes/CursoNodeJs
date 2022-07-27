const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)

    if(filename.includes('html')) {
        if(fs.existsSync(filename)) {
            roteamento(filename)
        }else {
            roteamento('404.html')
        }
    }
    
    function roteamento(filename) {
        fs.readFile(filename, function(err, data) {
            res.writeHead(200, { 'Contenty-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    }
})



server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})