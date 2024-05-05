const mongoose = require('mongoose');


const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 0
  },
  color: {
    type:String
  },

  
});


module.exports = mongoose.model('Animal', animalSchema);


