const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/patients')
const Patientvitals = require('./models/patientvitals')


app.use(express.json());


app.get('/patients', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})
app.post('/Patientvitals', async(req, res) => {
    try {
        const patientvitals = await Patientvitals.create(req.body)
        res.status(200).json()
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
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
