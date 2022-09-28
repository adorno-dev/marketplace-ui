import { ApiResponse } from "../types"
import { apiService } from "./api-service"

const getCarts = async () => {
    return await apiService.api.get("carts")
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const addItem = async (productId: string) => {
    return await apiService.api.post("carts/add-item", { productId })
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const removeItem = async (cartItemId: string) => {
    return await apiService.api.post("carts/remove-item", { cartItemId })
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const cartService = {
    getCarts,
    addItem,
    removeItem
}