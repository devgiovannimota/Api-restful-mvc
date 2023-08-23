const { Service: ServiceModel } = require("../models/service");

const serviceController = {
  create: async (request, response) => {
    try {
      const service = {
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        image: request.body.image,
      };
      const resp = await ServiceModel.create(service);
      response
        .status(201)
        .json({ service: resp, msg: "Serviço criado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
  getall: async (request, response) => {
    const resp = await ServiceModel.find();
    response.status(200).json({
      message: resp,
    });
  },
  getById: async (request, response) => {
    const { id } = request.params;

    const resp = await ServiceModel.findById({ _id: id });

    if (!resp) {
      response.status(404).json({ error: "Serviço não encontrado" });
    }

    response.status(200).json({ response: resp });
  },
  update: async (request, response) => {
    try {
      const { id } = request.params;
      const service = {
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        image: request.body.image,
      };
      const resp = await ServiceModel.findByIdAndUpdate(id, service, {
        new: true,
      });
      if (!resp) {
        response.status(404).json({ error: "Serviço não encontrado" });
      }
      response.status(200).json({
        message: resp,
      });
    } catch (error) {}
  },
  delete: async (request, response) => {
    try {
      const { id } = request.params;
      await ServiceModel.findOneAndDelete({ _id: id });
      response.status(200).send();
    } catch (error) {
      console.log(error);
      response.json({ message: "ID não encontrado" });
    }
  },
};

module.exports = serviceController;
