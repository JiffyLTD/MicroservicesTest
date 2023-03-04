import axios from "axios";

export default class AccountServiceAPI {
  static async Register(user) {
    let result = await axios.post("https://localhost:7123/signup", user);

    return result;
  }

  static async SignIn(userLogin, userPassword) {
    let result = await axios.post("https://localhost:7123/signin", {
      username: userLogin,
      password: userPassword,
    });

    return result;
  }

  static async Profile() {
    let token = localStorage.getItem("AccessToken");
    let role = localStorage.getItem("UserRole");
    let id = localStorage.getItem("UserId");

    let result  = await axios.get(`https://localhost:7123/user?id=${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        Role: role,
      },
    });

    return result.data;
  }
}
