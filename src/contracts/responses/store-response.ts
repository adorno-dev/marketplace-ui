import { Category } from "../../models/category";

export interface StoreResponse {
    id: number,
    name: string,
    categorires: Category[]
}