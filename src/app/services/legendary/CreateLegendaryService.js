import { v4 } from "uuid";
import LegendaryModel from "../../models/legendary/LegendaryModel";

export default class CreateLegendaryService {
  constructor() {}

  async create(
    name,
    description,
    type,
    healthPoints,
    specialAttack,
    defense,
    attack,
    experience,
    specialDefense
  ) {
    try {
      const newLegendary = await LegendaryModel.create({
        id: v4(),
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense,
      });

      return newLegendary;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
