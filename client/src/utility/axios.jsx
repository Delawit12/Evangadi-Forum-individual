import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/", // api url
  // baseURL: "https://evangadifinal.onrender.com/", // api url
  

  withCredentials: true,
});

export default instance;