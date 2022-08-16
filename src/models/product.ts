import { Store } from "."

export type Product = {
    id: string,
    name: string,
    description?: string,
    stock?: number,
    price?: number,
    store?: Store
}