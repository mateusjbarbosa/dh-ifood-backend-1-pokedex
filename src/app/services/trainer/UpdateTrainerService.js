import TrainerModel from "../../models/trainer/TrainerModel";
import ListTrainerService from "./ListTrainerService";

export default class UpdateTrainerService {
  constructor() {
    this.service = new ListTrainerService();
  }

  async update(id, name, age, city) {
    try {
      const trainer = await TrainerModel.findByPk(id);

      if (!trainer) {
        return { sucess: false, mensagem: "Treinador não encontrado" };
      }

      const [numeroDeRegistrosAtualizados] = await TrainerModel.update(
        {
          name,
          age,
          city,
        },
        {
          where: { id },
        }
      );

      if (numeroDeRegistrosAtualizados === 0) {
        return { sucess: false, mensagem: "Dados iguais" };
      } else {
        return {
          id,
          name,
          age,
          city,
        };
      }
    } catch (error) {
      console.log(error);
      return { sucess: false, message: error.message };
    }
  }
}
