import { useCallback, useEffect, useState } from "react"
import { Navbar, Pagination, Placeholder } from "../components"
import { ProductList } from "../components/product-list"
import { Paginated } from "../contracts/responses/paginated-response"
import { Product } from "../models"
import { productService } from "../services/product-service"

import './main.scss'

export const Main = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const [products, setProducts] = useState<Paginated<Product>>()
    const fetchData = useCallback((pageIndex?: number, pageSize?: number)=>{
        productService.getProducts({pageIndex, pageSize})
                      .then(res => setProducts(res.data))
    }, [])
    useEffect(() => {
        fetchData(1)
    }, [fetchData])
    return <>
    <Navbar />
    <Placeholder>
        <h2>Welcome to Marketplace</h2>
        <p>Please don't read this document until we finished this project. So you could've better experience.</p>
        <Pagination pageIndex={products?.pageIndex} pageCount={products?.pageCount} pageSize={products?.pageSize} paginate={fetchData} />
        <ProductList products={products?.items} />
    </Placeholder>
    </>
}