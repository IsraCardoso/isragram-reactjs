import HttpService from "./HttpService";

export default class UserService extends HttpService {
  async login(loginData) {
    const { data } = await this.post("/login", loginData);
    localStorage.setItem("loggedUserName", data.name);
    localStorage.setItem("loggedUserEmail", data.email);
    localStorage.setItem("loggedUserToken", data.token);
    if (data.avatar) {
      localStorage.setItem("loggedUserAvatar", data.avatar);
    }

    const loggedUser = await this.get("/user");
    localStorage.setItem("loggedUserUsername", loggedUser.data.username);
    localStorage.setItem("loggedUserId", loggedUser.data._id);
    if (loggedUser.data.avatar) {
      localStorage.setItem("loggedUserAvatar", loggedUser.data.avatar);
    }
  }

  async register(registerData) {
    return this.post("/register", registerData);
  }

  isAuthenticated() {
    return !!localStorage.getItem("loggedUserToken");
  }

  searchUsers(searchTerm: string) {
    return this.get("/search?filter="+ searchTerm);
  }
}
