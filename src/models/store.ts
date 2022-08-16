import { Category, User } from "."

export type Store = {
    id: string,
    name: string,
    categories?: Array<Category>,
    user?: User
}