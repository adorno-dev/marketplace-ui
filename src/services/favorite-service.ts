import { ApiResponse } from "../types"
import { apiService } from "./api-service"

type Props = {
    pageIndex?: number,
    pageSize?: number
}

const getFavorites = async (props?: Props) => {
    const paginated = props?.pageIndex ? `pages/${props.pageIndex}${props.pageIndex && props.pageSize ? `/${props.pageSize}` : ""}`:""
    return await apiService.api.get("favorites/pages")
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const favoriteService = {
    getFavorites
}