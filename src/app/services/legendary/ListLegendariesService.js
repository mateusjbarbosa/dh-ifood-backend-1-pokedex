import LegendaryModel from "../../models/legendary/LegendaryModel";

export default class ListLegendariesService {
  constructor() {}

  async listAll(pokemonName) {
    try {
      if (pokemonName) {
        return await this.listOne(pokemonName);
      }

      const pokemons = await LegendaryModel.findAll();
      return pokemons;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async listOne(pokemonName) {
    try {
      // SELECT * FROM legendaries WHERE name = Pikachu
      const pokemon = await LegendaryModel.findOne({
        where: { name: pokemonName },
      });

      if (!pokemon) {
        return { mensagem: "Pokémon não encontrado" };
      }

      return pokemon;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
