import { ApiResponse } from "../types"
import { apiService } from "./api-service"

const createStore = async (request: any) => {
    return await apiService.api.postForm("stores", request)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const getStore = async (id: string) => {
    return await apiService.api.get(`stores/${id}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const getUserStore = async () => {
    return await apiService.api.get("stores/user")
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const deleteUserStore = async (id: string) => {
    return await apiService.api.delete(`stores/${id}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const storeService = {
    createStore,
    getStore,
    getUserStore,
    deleteUserStore
}