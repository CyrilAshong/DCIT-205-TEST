const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.get('/', (req, res) => {
    res.send('Hello')
})

mongoose.
connect('mongodb+srv://ashongcyril2704:Wisdom(2704)@cluster0.egbtmp5.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() =>{
    console.log('Connected to Mongoose')

    app.listen(4200, (req, res) => {
        console.log("Server is running on port 4200")
    })
})
.catch(() => {
    console.log('Error!')
})
