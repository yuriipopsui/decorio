const {project} = require('../models');

exports.getAllProjects = async (req, res, next) => {
  res.json(await project.find())
}

exports.getProjectById = async (req, res, next) => {
  console.log(req.params.id);
  res.json(await project.findById(req.params.id));
};

exports.deleteProjectById = async (req, res, next) => {
  res.json(await project.deleteOne({
    _id: req.params.id
  }));
}

exports.createProject = async (req, res, next) => {
  const projectData = req.body;

  const newProject = await project.create(projectData);
  res.json(newProject);
}