import API_URL from "./config";

export const AuthService = {
  async login(user) {
    const response = await fetch(`${API_URL}/utilizadores/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: user.username,
        password: user.password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      if (data.accessToken) {
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      }
    } else {
      throw Error(handleResponses(response.status));
    }
  },
  async logout() {
    localStorage.removeItem("user");
  },
};

function handleResponses(code) {
  let message = "";
  switch (code) {
    case 400:
      message = "Username already exists.";
      break;
    case 401:
      message = "Wrong credentials";
      break;
    case 404:
      message = "User not found";
      break;
    default:
      message = "Unkown message";
      break;
  }
  return message;
}
