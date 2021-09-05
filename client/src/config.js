import axios from "axios";


export const axiosInstance = axios.create({
    baseURL : "https://psathya.herokuapp.com/api/"
})