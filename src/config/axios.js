import axios from "axios";

export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 5000, // 5 segundos
  // headers: { "X-Custom-Header": "foobar" },
});

if (process.env.ENVIRONMENT === "prod") {
  pokeApi.defaults.headers.common["ambiente"] = "produção";
} else {
  pokeApi.defaults.headers.common["ambiente"] = "teste";
}
