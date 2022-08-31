import ListLegendariesService from "../../services/legendary/ListLegendariesService";

export default class ListLegendaryByNameController {
  constructor() {
    this.service = new ListLegendariesService();
  }

  async index(request, response) {
    const { name } = request.query;

    const legendaries = await this.service.listAll(name);
    response.json(legendaries);
  }

  // async show(request, response) {
  //   const { name } = request.query;

  //   if (!name) {
  //     return response
  //       .status(400)
  //       .json({ erro: "Você não passou o nome do pokemon" });
  //   }

  //   const legendary = await this.service.listOne(name);

  //   return response.json(legendary);
  // }
}
