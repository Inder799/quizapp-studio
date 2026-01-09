import axios from "axios";

export const loginHandler = async (username, password) => {
  try {
    const {
      data: { token },
      status,
    } = await axios.post("http://localhost:8080/auth/login", {
      username: username,
      password: password,
    });
    if (status === 200) {
      localStorage.setItem("token", token);
      return token;
    }
    console.log(token);
  } catch (err) {
    console.log(err);
  }
};
