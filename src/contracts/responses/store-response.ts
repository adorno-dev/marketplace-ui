import { CategoryResponse } from "./category-response";

export interface StoreResponse {
    id: number,
    name: string,
    categorires: CategoryResponse[]
}