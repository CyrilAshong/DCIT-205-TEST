const express = require('express')
const app = express()

//routes

app.get("/", (req, res) => {
    res.send("I said Psycho is the Fucking Don!")
})


app.listen(4200, (req, res) => {
    console.log("Server is running on port 4200")
})