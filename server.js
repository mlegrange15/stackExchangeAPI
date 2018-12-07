const express = require('express')
const bodyParser = require('body-parser')

// Initialize the express server
const app = express()

// Body Parser 
app.use(bodyParser.json())

// Use API routes
const routes = require('./routes/api/routes')
// Anything that hits /api route should use routes
app.use('/api', routes)

// Server Port
const port = process.env.port || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))