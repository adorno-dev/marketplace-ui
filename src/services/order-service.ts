import { ApiResponse } from "../types"
import { apiService } from "./api-service"

const placeOrder = async () => {
    return await apiService.api.post("orders")
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const orderService = {
    placeOrder
}