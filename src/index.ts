import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3001

app.use(cors())

// import { usrTable } from '../data/usr.json'

app.get('/', (_, res) => {
    res.send('Backend Server')
})

app.listen(port, () => { console.log(`http://localhost:${port}`) })