import UpdateLegendaryService from "../../services/legendary/UpdateLegendaryService";

export default class UpdateLegendaryController {
  constructor() {
    this.service = new UpdateLegendaryService();
  }

  async update(request, response) {
    const { id } = request.params;
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

    const updatedLegendary = await this.service.update(
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
    );

    response.json(updatedLegendary);
  }
}
