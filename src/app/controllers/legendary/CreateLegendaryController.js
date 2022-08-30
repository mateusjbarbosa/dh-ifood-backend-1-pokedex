import CreateLegendaryService from "../../services/legendary/CreateLegendaryService";

export default class CreateLegendaryController {
  constructor() {
    this.service = new CreateLegendaryService();
  }

  async create(request, response) {
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense,
    } = request.body;

    const legendary = await this.service.create(
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    );

    return response.json(legendary);
  }
}
