import ListTrainerService from "../../services/trainer/ListTrainerService";

export default class ListAllTrainersController {
  constructor() {
    this.service = new ListTrainerService();
  }

  async listAll(request, response) {
    const trainers = await this.service.listAll();

    return response.send(trainers);
  }
}
