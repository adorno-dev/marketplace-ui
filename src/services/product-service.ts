import { ApiResponse } from "../types"
import { apiService } from "./api-service"

const getProducts = async () => {
    return await apiService.api.get("products/pages")
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const ProductService = {
    getProducts
}