import { v4 } from "uuid";
import TrainerModel from "../../models/trainer/TrainerModel";
import HashPassword from "../../utils/HashPassword";

export default class CreateTrainerService {
  constructor() {}

  async create(name, email, password, age, city) {
    if (name.length < 5) {
      return {
        sucess: false,
        message: "Nome precisa ter pelo menos 5 caracteres",
      };
    }

    if (age < 15 || age >= 40) {
      return {
        sucess: false,
        message: "Somente maiores de 15 e menores de 40 anos podem participar",
      };
    }

    const hashedPassword = HashPassword.hash(password);

    try {
      const newTrainer = await TrainerModel.create({
        id: v4(),
        name,
        email,
        passwordHash: hashedPassword,
        age,
        city,
      });

      return {
        sucess: true,
        message: newTrainer,
      };
    } catch (error) {
      console.log(error);
      return {
        sucess: true,
        message: error.message,
      };
    }
  }
}
