import axios from "axios";

export default class AccountServiceAPI {
  static async Register(user) {
    let result = await axios.post("https://localhost:7123/signup", user);

    return result;
  }

  static async SignIn(userLogin, userPassword){
    let result = await axios.post("https://localhost:7123/signin", {username: userLogin, password: userPassword} );

    return result;
  }
}
