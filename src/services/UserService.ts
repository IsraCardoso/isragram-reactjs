import axios from "axios";
import HttpService from "./HttpService";

export default class UserService extends HttpService {
  async login(loginData) {
    const { data } = await this.post("/login", loginData);
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("token", data.token);
    if (data.avatar) {
      localStorage.setItem("avatar", data.avatar);
    }
  }

  async register(registerData) {
    return this.post("/register", registerData);
  }
}
