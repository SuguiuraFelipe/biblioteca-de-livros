require('dotenv').config()
const express = require('express')
const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())

app.use('/auth', authRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))