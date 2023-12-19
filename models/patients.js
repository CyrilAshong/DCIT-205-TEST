const mongoose = require('mongoose')

const patientsSchema = mongoose.Schema(
    {
        surname: {
            type: String,
            required: [true, "Please enter your surname"]
        },
        Othernames: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        phone_number: {
            type: Number,
            required: true,
        },
        Residential_address: {
            type: String,
            required: true,
        },
        Emergency_name: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        Relationship_with_parents: {
            type: String,
            required: true,
        }
    }
)

const Patients = mongoose.model('Patients', patientsSchema)
module.exports = Patients;
