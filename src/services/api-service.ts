import axios, { AxiosError } from "axios"

export const api = axios.create({
    baseURL: "https://localhost:5000/api/"
})

const redirectToSignIn = () => {
    localStorage.removeItem("t")
    if (window.location.pathname.indexOf("signin") === -1) {
        window.location.assign(`/signin?return=${window.location.pathname}`)
    }
}

api.interceptors.request.use((config) => {
    let token = localStorage.getItem("t")
    if (token !== null) {}
        config.headers = {"Authorization":`Bearer ${token}`}
    return config
})

api.interceptors.response.use(undefined, (exception: AxiosError) => {
    if (exception.response?.status === 401) {
        redirectToSignIn()
    }
})

export const apiService = {
    api
}