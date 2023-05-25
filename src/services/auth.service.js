import API_URL from "./config";

export const AuthService = {
  async login(user) {
    const response = await fetch(`${API_URL}/utilizadores/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
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
      } else {
        throw Error(data.message);
      }
    } else {
      const data = await response.json();
      throw Error(data.message);
    }
  },
  async logout() {
    localStorage.removeItem("user");
  },
};

