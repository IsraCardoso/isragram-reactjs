import axios from "axios";

// I will use a class instead of a function to make it easier to maintain
// Even the axios library can be changed at any time
export default class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
    });

    this.axios.interceptors.request.use(
      (config) => {
        const loggedUserToken = localStorage.getItem("authenticatedUserToken");
        if (loggedUserToken) {
          config.headers.Authorization = `Bearer ${loggedUserToken}`;
        }
        return config;
      }
    )
  }

  post(url, data) {
    return this.axios.post(url, data);
  }

  get(url) {
    return this.axios.get(url);
  }
}