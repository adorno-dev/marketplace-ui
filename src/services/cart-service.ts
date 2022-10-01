import { ApiResponse } from "../types"
import { apiService } from "./api-service"

type Props = {
    pageIndex?: number,
    pageSize?: number
}

const getCarts = async (props?: Props) => {
    const paginated = props?.pageIndex ? `pages/${props.pageIndex}${props.pageIndex && props.pageSize ? `/${props.pageSize}` : ""}`:""
    console.log(props)
    return await apiService.api.get(`carts/${paginated}`)
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

const checkout = async (request: any) => {
    return await apiService.api.post("carts/checkout", request)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const cartService = {
    getCarts,
    addItem,
    removeItem,
    checkout
}