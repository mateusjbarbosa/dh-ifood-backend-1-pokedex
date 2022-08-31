import LegendaryModel from "../../models/legendary/LegendaryModel";
export default class UpdateLegendaryService {
  constructor() {}

  async update(
    id,
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
      const pokemon = await LegendaryModel.findByPk(id);

      if (!pokemon) {
        return { mensagem: "Pokémon não encontrado" };
      }

      const [numeroDeRegistrosAtualizados] = await LegendaryModel.update(
        {
          name,
          description,
          type,
          healthPoints,
          specialAttack,
          defense,
          attack,
          experience,
          specialDefense,
        },
        {
          where: { id },
        }
      );

      if (numeroDeRegistrosAtualizados === 0) {
        return { mensagem: "Dados iguais" };
      } else {
        return {
          id,
          name,
          description,
          type,
          healthPoints,
          specialAttack,
          defense,
          attack,
          experience,
          specialDefense,
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
