import axios from "axios";
import { monitorAPI } from "./api-monitor";
import { readCookie } from "./helperFunctions";

const axiosInstance = axios.create({});

// Response interceptor for monitoring Server Side API calls.
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const isClient = typeof window !== "undefined";
    const statusCode = error?.response?.status;
    const errorMessage = error?.response?.data;
    const endpoint = error?.config?.url;
    const method = error?.config?.method;
    const payload = JSON.parse(error?.config?.data);

    const path = isClient ? window?.location?.href : "TTS - Server API Call";
    const userGa = isClient ? readCookie("_ga") : "Not Available";

    const requestObject = { endpoint, method, payload };
    const responseObject = { statusCode, errorMessage };
    const clientInfo = { pageUrl: path, gaId: userGa };

    // To log API that returns error to Chat Bot
    await monitorAPI(requestObject, responseObject, clientInfo);

    return Promise.reject(error);
  }
);

export default axiosInstance;
