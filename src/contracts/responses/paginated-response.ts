export interface Paginated<T> {
    items: T[],
    totalItems: number,
    pageIndex: number,
    pageCount: number,
    pageSize: number
}