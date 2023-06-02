import API_URL from "./config";

export const BadgeService = {

    async getBadges(){
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user.accessToken;
        const response = await fetch(`${API_URL}/badges`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            let data = await response.json();
            if (data) {
                return data.badges;
            } else {
                throw Error(data.msg);
            }
        }
    },

    async deleteBadge(id) {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user.accessToken;
        const response = await fetch(`${API_URL}/badges/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            let data = await response.json();
            if (data) {
                return data;
            } else {
                throw Error(data.msg);
            }
        }
    }
};