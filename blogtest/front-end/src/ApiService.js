import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/";

class ApiService {

    fetchUsers(){
        return axios.get(USER_API_BASE_URL + 'users');
    }

    fetchUserByID(userID){
        return axios.get(USER_API_BASE_URL + 'users/' + userID);
    }

    deleteUser(userID){
        return axios.delete(USER_API_BASE_URL + 'users/' + userID);
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL + 'users', user);
    }

    editUser(user){
        return axios.put(USER_API_BASE_URL + 'users/' + user.user_id, user)
    }

    main(){
        return axios.get(USER_API_BASE_URL)
    }

}

export default new ApiService();