const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()


const PORT = process.env.PORT || 3000

// initialisation d'express
const app = express()

// activer cors
app.use(cors())

// routes
app.get('/api/search/:query', async (req, res) => {
  res.json({success: true})
  try {
    const query = req.params.query
    console.log('la requete', query)
    console.log(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${process.env.API_KEY}`);

    const results = await axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${process.env.API_KEY}`)
    console.log("mon resultat", results.data)

    const data = results.data
    res.status(200).json(data)

  } catch(err){
    res.status(500).json({error: err.message})
  }
})

app.listen(PORT, () => console.log(`le server express est lancé sur le port ${PORT}`))

