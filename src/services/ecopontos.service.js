import API_URL from "./config";

export const EcopontosService = {
  async getEcopontos() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.accessToken;
    const response = await fetch(`${API_URL}/ecopontos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data) {
        return data;
      } else {
        throw Error(data.error);
      }
    } else {
      const data = await response.json();
      throw Error(data.error);
    }
  },

  async getEcopontoById() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.accessToken;
    const response = await fetch(`${API_URL}/ecopontos/:id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data) {
        return data;
      } else {
        throw Error(data.message);
      }
    } else {
      const data = await response.json();
      throw Error(data.message);
    }
  },
  async ecopontosPorValidar() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.accessToken;
    const response = await fetch(`${API_URL}/ecopontos/pendentes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data.ecopontos;
    } else {
      const data = await response.json();
      throw Error(data.error);
    }
  },
  async getEcopontoById(id) {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.accessToken;
    const response = await fetch(`${API_URL}/ecopontos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data.ecoponto;
    } else {
      const data = await response.json();
      throw Error(data.msg);
    }
  },
  async validarEcoponto(id, data) {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.accessToken;
    const response = await fetch(`${API_URL}/ecopontos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ecopontoAprovado: data.ecopontoAprovado
      })
    });
    if (response.ok) {
      const data = await response.json();
      return data.msg;
    } else {
      const data = await response.json();
      throw Error(data.msg);
    }
  },
  async adicionarEcoponto(formData) {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.accessToken;
    const response = await fetch(`${API_URL}/ecopontos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      return data.msg;
    } else {
      const data = await response.json();
      throw Error(data.msg);
    }
  },
};
