import jwt from "jsonwebtoken";
import ListTrainerService from "../app/services/trainer/ListTrainerService";

export default async function validateSessionToken(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ error: "Needs login" });
  }

  const getValidToken = String(token).split("Bearer ")[1];

  try {
    const validateToken = jwt.verify(
      getValidToken,
      process.env.JWT_PRIVATE_KEY
    );

    // Verificação "desnecessária" pois o verify valida o tempo de expiração do token também. Mantive o código para mostrar que o exp vem com o valor que precisa ser modificado na verificação
    if (new Date() > validateToken.exp * 1000) {
      return response.status(401).json({ error: "Expired token" });
    }

    const listTrainerService = new ListTrainerService();
    const isValidTrainerId = await listTrainerService.listOneById(
      validateToken.id
    );

    if (!isValidTrainerId) {
      return response.status(401).json({ error: "Trainer not found" });
    }
  } catch (error) {
    return response.status(401).json({ error: error.message });
  }

  next();
}
