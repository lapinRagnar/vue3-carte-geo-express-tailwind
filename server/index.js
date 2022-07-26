const express = require('express')
const cors = require('cors')

require('dotenv').config()


const PORT = process.env.PORT || 3000

// initialisation d'express
const app = express()

// activer cors
app.use(cors())

// routes
app.use('/api/search', require('./routes/searchResults.js') )

app.listen(PORT, () => console.log(`le server express est lancé sur le port ${PORT}`))

