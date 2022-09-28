import { Category } from "../../models/category";
import { Store } from "../../models/store";

export interface ProductResponse {
    id: string,
    storeId?: string,
    categoryId?: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    favorite: boolean,
    screenshoot?: string,
    screenshoots?: string[],
    category: Category,
    store: Store
}