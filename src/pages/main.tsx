import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Placeholder } from "../components"
import { Paginated } from "../contracts/responses/paginated-response"
import { ProductResponse } from "../contracts/responses/product-response"
import { ProductService } from "../services/product-service"

import './main.scss'

export const Main = () => {
    const [products, setProducts] = useState<Paginated<ProductResponse>>()

    useEffect(() => {
        ProductService.getProducts()
                      .then(res => setProducts(res.data))
    }, [])

    return <>
    <Navbar />
        <Placeholder>
            <h2>Welcome to Marketplace</h2>
            <p>Please don't read this document until we finished this project. 
                So you could've better experience.</p>
            <ul className="products">
                {
                    products?.items.map(p => 
                        <li key={p.id}>
                            <img src="/public/assets/products/product-1.webp" />
                            <Link className="product" to="/product">{p.name}</Link>
                            <Link className="store" to="/store">{p.store.name}</Link>
                            <div className="split">
                                <span className="reviews">
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <Link to="reviews">0 Reviews</Link>
                                </span>
                                <span className="price">$ {p.price}</span>
                            </div>
                        </li>
                    )
                }
            </ul>
        </Placeholder>
    </>
}