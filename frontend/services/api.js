import axios from "axios";

const api = axios.create({
  baseURL: "http:// 192.168.41.83:8080/api", // Replace with your IP
});

export default api;
