const mongoose = require('mongoose')

const patientvitalsSchema = mongoose.Schema(
    {
        blood: {
            type: String,
            required: [true, "Please enter your surname"]
        },
        OPD: {
            type: String,
            required: true,
        },
        temperature: {
            type: Number,
            required: true,
        },
        pressure: {
            type: Number,
            required: true,
        },
        Specialist_care: {
            type: String,
            required: true,
        },
    }   
)

const Patientvitals = mongoose.model('Patientvitals', patientvitalsSchema)
module.exports = Patientvitals;
