import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://vue-code-challenge.netlify.app/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
