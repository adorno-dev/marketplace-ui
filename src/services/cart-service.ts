import { ApiResponse } from "../types"
import { apiService } from "./api-service"

const getCarts = async () => {
    return await apiService.api.get("carts")
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const CartService = {
    getCarts
}