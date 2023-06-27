import axios from "axios";

export const BASE_URL = "http://localhost:1814/Phase3";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
