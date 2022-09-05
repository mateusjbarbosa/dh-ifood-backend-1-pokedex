import crypto from "node:crypto";
import { v4 } from "uuid";
import TrainerModel from "../../models/trainer/TrainerModel";

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

    const hashedPassword = crypto
      .pbkdf2Sync(password, process.env.PASSWORD_SALT, 10000, 64, "sha512")
      .toString("hex");

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
