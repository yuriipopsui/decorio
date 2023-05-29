const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: String,
  costTotal: Number,
  costMaterials: Number,
  salary: Number,
  costTools: Number,
  works: [
    {
      name: String,
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
  materials:[
    {
      name: String,
      quantity: Number,
    },
  ],
  tools: [
    {
      name: String,
      quantity: Number,
    },
  ],
  photos: [
    {
      url: String,
      description: String,
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;