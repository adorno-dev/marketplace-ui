import { ApiResponse } from "../types"
import { apiService } from "./api-service"

const getFavorites = async () => {
    return await apiService.api.get("favorites/pages")
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const FavoriteService = {
    getFavorites
}