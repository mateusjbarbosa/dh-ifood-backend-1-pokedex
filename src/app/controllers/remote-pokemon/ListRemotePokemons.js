import axios from "axios";

export default class ListRemotePokemonsController {
  constructor() {}

  async index(request, response) {
    const { offset, limit } = request.query;

    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );

      return response.status(result.status).json(result.data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async show(request, response) {
    const { name } = request.params;

    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      return response.status(result.status).json(result.data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async save(request, response) {
    try {
      // é a mesma estrutura para put ou patch
      // ATENÇÃO: ESSA ROTA NÃO EXISTE, É SOMENTE DIDÁTICA
      const result = await axios.post("https://pokeapi.co/api/v2/pokemon", {
        name: "Bubassauro",
        description: "Um pokémon bem bacana",
        type: "legendary",
        healthPoints: 1000,
        specialAttack: 1000,
        defense: 1000,
        attack: 1000,
        experience: 1000,
        specialDefense: 1000,
      });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
