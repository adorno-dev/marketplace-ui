import { ProductResponse } from "./product-response";

export interface CartItemResponse {
    id: string,
    cartId: string,
    productId: string,
    description: string,
    quantity: number,
    price: number
}