import axios from "axios";
import HttpService from "./HttpService";

export default class UserService extends HttpService {
  async login(username, password) {}

  async register(data) {
    return history.post("/register", data);
  }
}
