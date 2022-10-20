import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Pagination, Placeholder } from "../components"
import { Paginated } from "../contracts/responses/paginated-response"
import { ProductResponse } from "../contracts/responses/product-response"
import { productService } from "../services/product-service"

import './main.scss'

export const Main = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const [products, setProducts] = useState<Paginated<ProductResponse>>()
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
        <p>Please don't read this document until we finished this project. 
            So you could've better experience.</p>

        <Pagination pageIndex={products?.pageIndex} pageCount={products?.pageCount} pageSize={products?.pageSize} paginate={fetchData} />
        
        <ul className="products">
            {
                products?.items.map(p => 
                    <li key={p.id}>
                        <Link to={`/products/${p.id}`}>
                            <img src={p.screenshoot} />
                        </Link>
                        <Link className="product" to={`/products/${p.id}`}>{p.name}</Link>
                        <Link className="store" to={`/stores/${p.store.id}`}>{p.store.name}</Link>
                        <div className="split">
                            <span className="reviews">
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <Link to="reviews">0 Reviews</Link>
                            </span>
                            <span className="price">{currency.format(p.price).replace("$", "$ ")}</span>
                        </div>
                    </li>
                )
            }
        </ul>
        
    </Placeholder>
    </>
}