import axios from "axios";

const token = localStorage.getItem("@hub:token");

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});
