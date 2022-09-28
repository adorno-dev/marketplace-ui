import axios, { AxiosError } from "axios"

export const api = axios.create({
    baseURL: "https://localhost:5000/api/"
})

api.interceptors.request.use((config) => {
    let token = localStorage.getItem("t")
    if (token !== null)
        config.headers = {"Authorization":`Bearer ${token}`}
    return config
})

api.interceptors.response.use(undefined, (exception: AxiosError) => {
    if (exception.response?.status === 401) {
        localStorage.removeItem("t")
    }
})

export const apiService = {
    api
}