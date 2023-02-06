const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ["Item A", "Item B", "Item C"]

    res.render('dashboard', { items })
})

app.get('/blogpost', (req, res) => {
    const post = {
        title: "Aprender Node Js",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender NodejJs...",
        comments: 4,
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender Node Js",
            category: "JavaScript",
            body: "Este artigo vai te ajudar a aprender NodejJs...",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Este artigo vai te ajudar a aprender PHP...",
            comments: 4
        },
        {
            title: "Aprender Angular",
            category: "Framework",
            body: "Este artigo vai te ajudar a aprender Angular...",
            comments: 4
        }
    ]

    res.render('blog', { posts })
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