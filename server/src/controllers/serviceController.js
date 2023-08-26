const {service} = require('../models');

exports.getAllServices = async (req, res, next) => {
  res.json(await service.find())
}

exports.getServiceById = async (req, res, next) => {
  console.log(req.params.id);
  res.json(await service.findById(req.params.id));
};

exports.deleteServiceById = async (req, res, next) => {
  res.json(await service.deleteOne({
    _id: req.params.id
  }));
}

exports.createService = async (req, res, next) => {
  const serviceData = req.body;
  console.log(serviceData)
  // res.status(200)
  const newService = await service.create(serviceData);
  res.json(newService);
}