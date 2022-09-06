import jwt from "jsonwebtoken";
import ListTrainerService from "../../services/trainer/ListTrainerService";
import HashPassword from "../../utils/HashPassword";
export default class SessionController {
  constructor() {}

  static async create(request, response) {
    const { email, password } = request.body;

    const service = new ListTrainerService();
    const trainer = await service.listOne(email);

    if (!trainer) {
      return response.status(401).json({ error: "Trainer not found" });
    }

    const isValidPassword = HashPassword.validate(
      password,
      trainer.passwordHash
    );

    if (!isValidPassword) {
      return response.status(401).json({ error: "Invalid password" });
    }

    const { id, name } = trainer;

    return response.json({
      trainer: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: "5d",
      }),
    });
  }
}
