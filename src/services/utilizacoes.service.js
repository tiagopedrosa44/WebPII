import API_URL from "./config.js";

export const UtilizacoesService = {
    async getUtilizacoesPendentes() {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user.accessToken;
        const response = await fetch(`${API_URL}/utilizacao/pendentes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            const data = await response.json();
            if (data) {
                return data.utilizacoes;
            } else {
                throw Error(data.message);
            }
        }
        else {
            const data = await response.json();
            throw Error(data.message);
        }
    },
};