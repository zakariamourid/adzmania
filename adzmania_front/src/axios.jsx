import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://api.adzmania.test/",
});

// axiosClient.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("ACCESS_TOKEN");
//     config.headers.Authorization = token ? `Bearer ${token}` : "";
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error.response.status === 401) {
//       localStorage.removeItem("ACCESS_TOKEN");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );
