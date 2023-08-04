import HttpService from "./HttpService";

export default class UserService extends HttpService {
  async login(loginData) {
    const { data } = await this.post("/login", loginData);
    localStorage.setItem("authenticatedUserName", data.name);
    localStorage.setItem("authenticatedUserEmail", data.email);
    localStorage.setItem("authenticatedUserToken", data.token);
    if (data.avatar) {
      localStorage.setItem("authenticatedUserAvatar", data.avatar);
    }

    const authenticatedUser = await this.get("/user");
    localStorage.setItem(
      "authenticatedUserUsername",
      authenticatedUser.data.username
    );
    localStorage.setItem("authenticatedUserId", authenticatedUser.data._id);
    if (authenticatedUser.data.avatar) {
      localStorage.setItem(
        "authenticatedUserAvatar",
        authenticatedUser.data.avatar
      );
    }
  }

  async register(registerData) {
    return this.post("/register", registerData);
  }

  isAuthenticated() {
    return !!localStorage.getItem("authenticatedUserToken");
  }

  searchUsers(searchTerm: string) {
    return this.get("/search?filter=" + searchTerm);
  }

  getAuthenticatedUserInfo() {
    return {
      id: localStorage.getItem("authenticatedUserId"),
      name: localStorage.getItem("authenticatedUserName"),
      username: localStorage.getItem("authenticatedUserUsername"),
      email: localStorage.getItem("authenticatedUserEmail"),
      avatar: localStorage.getItem("authenticatedUserAvatar"),
    };
  }
}
