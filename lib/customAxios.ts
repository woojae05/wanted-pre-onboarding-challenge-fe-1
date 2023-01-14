import axios from 'axios';


const customAxios = axios.create({
    baseURL: "http://15.164.96.221:8080",
});

export default customAxios;