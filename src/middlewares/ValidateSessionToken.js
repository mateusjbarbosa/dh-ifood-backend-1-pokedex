export default function validateSessionToken(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ error: "Needs login" });
  }

  next();
}
