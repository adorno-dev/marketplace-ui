export type Product = {
    id: number,
    name: string,
    description?: string,
    store: string,
    reviews: number,
    price: number,
    quantity?: number
}