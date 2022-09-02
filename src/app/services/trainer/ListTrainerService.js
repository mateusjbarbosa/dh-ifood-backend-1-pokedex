import TrainerModel from "../../models/trainer/TrainerModel";

export default class ListTrainerService {
  constructor() {}

  async listAll() {
    try {
      const trainers = await TrainerModel.findAll();
      return trainers;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async listOne(email, password) {
    try {
      const trainer = await TrainerModel.findOne({
        where: {
          email,
          password,
        },
      });

      if (!trainer) {
        return { mensagem: "Treinador não encontrado" };
      }

      return trainer;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
