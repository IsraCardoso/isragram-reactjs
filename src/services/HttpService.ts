import axios from "axios";

// I will use a class instead of a function to make it easier to maintain
// Even the axios library can be changed at any time
export default class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.PUBLIC_API_URL + "/api",
    });
  }
  post(url, data) {
    return this.axios.post(url, data);
  }
}
