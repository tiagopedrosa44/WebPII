import API_URL from './config.js'

export const UserService = {
    async getALlUsers() {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user.accessToken;
        const response = await fetch(`${API_URL}/utilizadores`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        })
        if (response.ok) {
            let data = await response.json();
            return data.users;
        } else {
            throw Error(response.message);
        }
    },
    async deleteUserById(id) {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user.accessToken;
        const response = await fetch(`${API_URL}/utilizadores/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        })
        if (response.ok) {
            let data = await response.json();
            return data;
        } else {
            throw Error(response.message);
        }
    },
    async getUserByID(id) {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user.accessToken;
        const response = await fetch(`${API_URL}/utilizadores/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
                }
        })
        if (response.ok) {
            let data = await response.json();
            return data;
        } else {
            throw Error(response.message);
        }
    },
}

