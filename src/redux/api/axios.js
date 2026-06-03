import axios from "axios";
import { getItem } from "../../helpers/storageService";

axios.defaults.baseURL =
  "https://azimjon-oka-project-backend-production.up.railway.app/api";

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const authorization = token ? `Bearer ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
