import axios from "axios";

const api = axios.create({
  //baseURL: "http://192.168.0.5:8081",
  baseURL: "http://127.0.0.1:8080",
  timeout: 10000,
});

export default api;
