const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getHouse, deleteHouse, updateHouse, createHouse} = require('./controller')

app.get('/api/houses', getHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)


const PORT = 4004

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))