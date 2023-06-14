import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://api.adzmania.test/",
});
