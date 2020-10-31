import axios from "axios";
//Use randomuser website that Dave sent us for API call
export default {

    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};