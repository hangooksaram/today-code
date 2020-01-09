import axios from 'axios';
// axio import x?
const USER_API_BASE_URL = 'http://localhost:3000/users';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId); //userId -> url
    }

    deleteContent(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addContent(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editContent(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();