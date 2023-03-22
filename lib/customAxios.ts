import axios from 'axios';


const customAxios = axios.create({
    baseURL: "https://api.jwoojae.net",
});

export default customAxios;