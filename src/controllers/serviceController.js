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
};

module.exports = serviceController;
