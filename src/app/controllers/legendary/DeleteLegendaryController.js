import DeleteLegendaryService from "../../services/legendary/DeleteLegendaryService";

export default class DeleteLegendaryController {
  constructor() {
    this.service = new DeleteLegendaryService();
  }

  async delete(request, response) {
    const { id } = request.params;

    const resultado = await this.service.delete(id);

    response.send(resultado);
  }
}
