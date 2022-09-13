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

  async listOne(email) {
    try {
      const trainer = await TrainerModel.findOne({
        where: {
          email,
        },
      });

      return trainer;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async listOneById(id) {
    try {
      const trainer = await TrainerModel.findOne({
        where: {
          id,
        },
      });

      return trainer;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
