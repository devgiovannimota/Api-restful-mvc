const partyModel = require("../models/party");

const checkPartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0);
  if (budget > priceSum) {
    return true;
  }
  return false;
};

const partyController = {
  create: async (request, response) => {
    try {
      const party = {
        title: request.body.tittle,
        author: request.body.author,
        description: request.body.description,
        budget: request.body.budget,
        image: request.body.image,
        services: request.body.services,
      };
      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        response
          .status(406)
          .json({ message: "O seu orçamento é insuficiente" });
        return;
      }
      const resp = await partyModel.create(party);
      response.status(201).json({ resp, message: "criado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (request, response) => {
    try {
      const id = request.params.id;
      const party = await partyModel.findById(id);
      if (!party) {
        response.status(404).send("Partie não encontrada");
        return;
      }
      response.status(200).json({ message: party });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (request, response) => {
    try {
      const id = request.params.id;
      const party = await partyModel.findByIdAndDelete({ _id: id });

      if (!party) {
        response.status(404).send("Partie não encontrada");
      }

      response.status(200).send();
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = partyController;
