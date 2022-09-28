import { Category } from "./category"
import { Store } from "./store"

export type Product = {
    id: string,
    storeId?: string,
    categoryId?: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    favorite?: boolean,
    cart?: boolean,
    screenshoot?: string,
    screenshoots?: string[],
    category: Category,
    store: Store
}