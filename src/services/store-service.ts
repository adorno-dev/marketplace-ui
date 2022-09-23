import { CreateStoreRequest } from "../contracts/requests/create-store-request"
import { ApiResponse } from "../types"
import { apiService } from "./api-service"

const createStore = async (request: any) => {
    return await apiService.api.postForm("stores", request)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const storeService = {
    createStore
}