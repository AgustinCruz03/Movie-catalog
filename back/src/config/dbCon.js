const mongoose = require("mongoose")
require('dotenv').config()

const URI = process.env.URI

const dbCon = async () => {
    try {
    await mongoose.connect(URI)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbCon