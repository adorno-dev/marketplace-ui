import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Placeholder } from "../components"
import { Product } from "../models"

import './main.scss'

export const Main = () => {
    const [products, setProducts] = useState<Product[]>([
        {id: 1,name: "Product #1",description: "Product #1 description",store: "A4U Store",reviews: 1,price: 5000.00},
        {id: 2,name: "Product #2",description: "Product #2 description",store: "A4U Store",reviews: 1,price: 5000.00},
        {id: 3,name: "Product #3",description: "Product #3 description",store: "A4U Store",reviews: 1,price: 5000.00},
        {id: 4,name: "Product #4",description: "Product #4 description",store: "A4U Store",reviews: 1,price: 5000.00},
        {id: 5,name: "Product #5",description: "Product #5 description",store: "A4U Store",reviews: 1,price: 5000.00},
        {id: 6,name: "Product #6",description: "Product #6 description",store: "A4U Store",reviews: 1,price: 5000.00},
        {id: 7,name: "Product #7",description: "Product #7 description",store: "A4U Store",reviews: 1,price: 5000.00},
        {id: 8,name: "Product #8",description: "Product #8 description",store: "A4U Store",reviews: 1,price: 5000.00},
        {id: 9,name: "Product #9",description: "Product #9 description",store: "A4U Store",reviews: 1,price: 5000.00},
    ])
    return <>
        <Navbar />
        <Placeholder>
            <h2>Welcome to Marketplace</h2>
            <p>Please don't read this document until we finished this project. 
                So you could've better experience.</p>
            <ul className="products">
                {
                    products.map(p => 
                        <li key={p.id}>
                            <img src="/public/assets/products/product-1.webp" />
                            <Link className="product" to="/product">DEMO (AMD) Poppy (wear to unpack)</Link>
                            <Link className="store" to="/store">Apple May Designs (AMD)</Link>
                            <div className="split">
                                <span className="reviews">
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <Link to="reviews">0 Reviews</Link>
                                </span>
                                <span className="price">$ 1000</span>
                            </div>
                        </li>
                    )
                }
            </ul>
        </Placeholder>
    </>
}