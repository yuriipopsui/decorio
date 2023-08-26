const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  materials: [
    {
      name: String,
      manufacturer: String,
      expense: Number,
      price: Number
    },
  ],
  works:[
    {
      name: String,
      price: Number
    }
  ],
  workers:[
    {
      name: String,
      grade: String
    }
  ],
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;