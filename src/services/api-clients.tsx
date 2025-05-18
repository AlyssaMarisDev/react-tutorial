import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4db4479db90544ba87d485c5d8308f1b",
  },
});

export default apiClient;
