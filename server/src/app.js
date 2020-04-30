// Import modules / dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express() // Build an express server
app.use(morgan('combined')) // Use the log generator morgan
app.use(bodyParser.json()) // Allow our app to easily parse any Json request that was sent in
app.use(cors()) // Allow any host or client to access this

// Create an endpoint that, upon request, sends back an object (define route)
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

// Run the server on port 8081, or overwrite it with environment variables
app.listen(process.env.PORT || 8081)
