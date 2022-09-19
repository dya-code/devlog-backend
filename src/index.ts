import express from 'express'
import cors from 'cors'
import fs from 'fs'
const app = express()
const port = process.env.PORT || 3001
const data = require('../config/data.json')

app.use(cors())

app.get('/', (_, res) => {
    res.send('Backend Server')
})

app.get("/new/:title/:content", (req, res) => {

    res.header("Access-Control-Allow-Origin", "*")

    const title = req.params.title
    const content = req.params.content

    let newblog = {
        "key": data.blogs.length,
        "title": title,
        "content": content,
    }

    data.blogs.push({ "key": data.blogs.length, "title": title, "content": content })

    fs.writeFileSync('./config/data.json', JSON.stringify(data))

    res.send(`title: ${title} / content: ${content}`)
});

app.get('/view', (_, res) => {
    res.send(JSON.stringify(data))
})

app.listen(port, () => { console.log(`http://localhost:${port}`) })