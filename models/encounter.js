const mongoose = require('mongoose')

const encounterSchema = mongoose.Schema(
    {
      Date_and_time: {
        type: String,
        required: true,
      },
      Emergency: {
        type: String,
        required: true,
      }
       
    }
)

const Encounter = mongoose.model('Encounter', encounterSchema)
module.exports = Encounter;
