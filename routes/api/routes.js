const express = require("express");
const router = express.Router();

// Get api/users
router.get('/users', (req, res) => {
    // Call Stack Exchange API and return users
    res.json('working')    
})

module.exports = router