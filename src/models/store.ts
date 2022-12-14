import { Product } from "./product"
import { User } from "./user"

export type Store = {
    id: string,
    joined: Date,
    name: string,
    profile: string,
    politics: string,
    url: string,
    logo: string,
    banner: string,
    categories?: string[],
    user: User,
    items?: Product[],

    totalItems?: number,
    pageIndex?: number,
    pageCount?: number,
    pageSize?: number
}