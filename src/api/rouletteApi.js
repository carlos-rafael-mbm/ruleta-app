import axios from "axios";

export const rouletteApi = axios.create({
    baseURL: 'https://localhost:7088/api'
})