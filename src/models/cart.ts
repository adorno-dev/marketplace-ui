import { CartItem } from "./cart-item";

export interface Cart {
    id: string,
    userId: string,
    items: CartItem[],

    totalItems?: number,
    pageIndex?: number,
    pageCount?: number,
    pageSize?: number
}