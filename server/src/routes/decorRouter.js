const express = require('express');
const router = express.Router();
const projectController = require("../controllers/projectController")


router.get('/projects', projectController.getAllProjects);
router.post('/project', projectController.createProject);
router.get('/project/:id', projectController.getProjectById);
router.delete('/project/:id', projectController.deleteProjectById);

module.exports = router;