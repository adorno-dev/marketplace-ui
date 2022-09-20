import axios, { AxiosError } from "axios";
import { ApiResponse } from "../types/api-response-type";

export const api = axios.create({
    baseURL: "https://localhost:5000/api/"
})

const getProducts = async () => {
    try {
        return await api.get("products") as ApiResponse   
    } catch (error) {
        return (error as AxiosError).response as ApiResponse
    }
}

export const ProductService = {
    getProducts
}