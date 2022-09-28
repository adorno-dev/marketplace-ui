import { ApiResponse } from "../types"
import { apiService } from "./api-service"

type Props = {
    pageIndex?: number,
    pageSize?: number
}

const getCategories = async (props?: Props) => {
    const paginated = props?.pageIndex ? `pages/${props.pageIndex}${props.pageIndex && props.pageSize ? `/${props.pageSize}` : ""}`:""
    return await apiService.api.get(`categories/${paginated}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const getCategory = async (id: number) => {
    return await apiService.api.get(`categories/${id}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const createCategory = async (request: any) => {
    return await apiService.api.post("categories", request)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const updateCategory = async (request: any) => {
    return await apiService.api.put("categories", request)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

const deleteCategory = async (id: number) => {
    return await apiService.api.delete(`categories/${id}`)
        .then(res => res as ApiResponse)
        .catch(err => err.response as ApiResponse)
}

export const categoryService = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}