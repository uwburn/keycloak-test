import axios from "axios";
import keycloakSvc from "../services/keycloackSvc";

let axiosInstance = axios.create({
  baseURL: "http://localhost:3005",
  paramsSerializer: (params) => {
    const keys = Object.keys(params);
    let options = "";

    keys.forEach((key) => {
      const isParamTypeObject = typeof params[key] === "object";
      const isParamTypeArray = isParamTypeObject && (params[key].length >= 0);

      if (!isParamTypeObject) {
        options += `${key}=${params[key]}&`;
      }

      if (isParamTypeObject && isParamTypeArray) {
        params[key].forEach((element) => {
          options += `${key}=${element}&`;
        });
      }
    });
    return options ? options.slice(0, -1) : options;
  }
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, function(error) {
  return Promise.reject(error.response);
});

axiosInstance.interceptors.request.use((request) => {
  request.headers["Authorization"] = "Bearer " + keycloakSvc.token;

  return request;
}, function(error) {
  return Promise.reject(error.response);
});

export default axiosInstance;
