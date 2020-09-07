import axios from "axios";

const instance = axios.create({
  baseURL: "http://https://whatspp-clone-backend.herokuapp.com/",
});

export default instance;
