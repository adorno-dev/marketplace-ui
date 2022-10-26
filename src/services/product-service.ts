import { ApiResponse } from "../types"
import { apiService } from "./api-service"

type Props = {
    pageIndex?: number,
    pageSize?: number
}

const getProducts = async (props?: Props) => {
    const paginated = props?.pageIndex ? `pages/${props.pageIndex}${props.pageIndex && props.pageSize ? `/${props.pageSize}` : ""}`:""
    console.log(paginated)
    return await apiService.api.get(`products/${paginated}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const getProduct = async (id: string) => {
    return await apiService.api.get(`products/${id}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const getStoreProducts = async ({storeId, props}:{storeId: string | undefined, props?: Props}) => {
    const paginated = props?.pageIndex ? `pages/${props.pageIndex}${props.pageIndex && props.pageSize ? `/${props.pageSize}` : ""}`:""
    return storeId && await apiService.api.get(`products/store/${storeId}/${paginated}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const createProduct = async (request: any) => {
    return await apiService.api.postForm("products", request)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const updateProduct = async (request: any) => {
    return await apiService.api.putForm("products", request)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const deleteProduct = async (id: string) => {
    return await apiService.api.delete(`products/${id}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const favorite = async (productId: string) => {
    return await apiService.api.post(`products/favorite/${productId}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const unfavorite = async (productId: string) => {
    return await apiService.api.post(`products/unfavorite/${productId}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const productService = {
    getProducts,
    getProduct,
    getStoreProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    favorite,
    unfavorite
}