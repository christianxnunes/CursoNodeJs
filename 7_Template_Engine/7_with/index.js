const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ["Item A", "Item B", "Item C"]

    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: "Aprender Node Js",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender NodejJs...",
        comments: 4,
    }

    res.render('post', { post })
})

app.get('/', (req, res) => {
    const user = {
        name: "Christian",
        surname: "X Nunes"
    }

    const auth = true
    const approved = false

    res.render('home', { user, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})