import axios from "axios";
import { VITE_APP_API_URL, VITE_APP_GIT_TOKEN } from "../../config/envConfig";

const axiosMain = axios.create({
  baseURL: VITE_APP_API_URL,
  headers: {
    Authorization: `Bearer ${VITE_APP_GIT_TOKEN}`,
    "Content-Type": "application/json",
  },
});
axiosMain.CancelToken = axios.CancelToken;
axiosMain.source = axiosMain.CancelToken.source();

export default axiosMain;
