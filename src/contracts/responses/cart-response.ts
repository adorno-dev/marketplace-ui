import { CartItemResponse } from "./cart-item-response";

export interface CartResponse {
    id: string,
    userId: string,
    items: CartItemResponse[],
}