import crypto from "node:crypto";

export default class HashPassword {
  constructor() {}

  static hash(password) {
    const hashedPassword = crypto
      .pbkdf2Sync(password, process.env.PASSWORD_SALT, 10000, 64, "sha512")
      .toString("hex");

    return hashedPassword;
  }

  static validate(password, hash) {
    const hashedPassword = HashPassword.hash(password);

    return hashedPassword === hash;
  }
}
