import { CategoryResponse } from "./category-response";
import { StoreResponse } from "./store-response";

export interface ProductResponse {
    id: string,
    storeId?: string,
    categoryId?: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    favorite: boolean,
    category: CategoryResponse,
    store: StoreResponse
}