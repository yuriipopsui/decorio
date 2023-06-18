const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  date: String,
  address: String,
  customer: {
    name: String,
    phone: String,
    info: String
  },
  decor: {
    name: String,
    color: String,
    description: String
  },
  measure: {
    square: Number,
    linear: Number
  },
  status: {
    offer: Boolean,
    inWork: Boolean,
    complited: Boolean,
  },
  costTotal: Number,
  costMaterials: Number,
  salary: Number,
  costTools: Number,
  overheads: Number, // накладні витрати
  taxes: Number,
  income: Number,
  works: [
    {
      name: String,
      price: Number,
      cost: Number,
      description: String,
    },
  ],
  workers: [
    {
      name: String,
      position: String,
      salary: Number,
    },
  ],
  materials: [
    {
      name: String,
      quantity: Number,
      price: Number,
      cost: Number
    },
  ],
  tools: [
    {
      name: String,
      quantity: Number,
      price: Number,
      cost: Number
    },
  ],
  photos:{
    source: [
    {
      url: String,
      description: String,
    },
  ],
    result: [
      {
        url: String,
        description: String,
      },
    ],
  } 
  
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
