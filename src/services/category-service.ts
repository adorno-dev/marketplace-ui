import { ApiResponse } from "../types"
import { apiService } from "./api-service"

const getCategories = async () => {
    return await apiService.api.get("categories/pages")
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const CategoryService = {
    getCategories
}