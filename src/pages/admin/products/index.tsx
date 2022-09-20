import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Authorized, Navbar, Pagination, Placeholder } from "../../../components"
import { Product } from "../../../models"

import './index.scss'

export const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState<Product[]>([
        {id: 1, name: "Product #1", description: "Product description #1", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0},
        {id: 2, name: "Product #2", description: "Product description #2", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0},
        {id: 3, name: "Product #3", description: "Product description #3", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0},
        {id: 4, name: "Product #4", description: "Product description #4", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0},
        {id: 5, name: "Product #5", description: "Product description #5", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0},
        {id: 6, name: "Product #6", description: "Product description #6", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0},
        {id: 7, name: "Product #7", description: "Product description #7", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0},
        {id: 8, name: "Product #8", description: "Product description #8", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0},
        {id: 9, name: "Product #9", description: "Product description #9", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0},
    ])
    const createHandler = () => {
        navigate("/admin/products/new")
    }
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <section id="products">
            <h2>Products</h2>
            <p>There are {products.length} products available.</p>
            <div>
                <Link to="/admin">Back to Admin</Link>
                <button onClick={createHandler}>Create</button>
            </div>
            <ul>
                <li>
                    <b>NAME</b>
                    <b className="columns">STORE</b>
                    <b className="columns">PRICE</b>
                </li>
            {
                products.map(m =>
                    <li key={m.id}>
                        <span>{m.name}</span>
                        <span className="columns">{m.store}</span>
                        <span className="columns">$ {m.price}</span>
                        <div>
                            <Link to={{pathname: `/admin/products/edit/${m.id}`}}>EDIT<i className="fa-solid fa-pen-to-square"></i></Link>
                            <Link to={{pathname: `/admin/products/delete/${m.id}`}}>DELETE<i className="fa-solid fa-trash"></i></Link>
                        </div>
                    </li>
                )
            }
            </ul>
            <Pagination />
        </section>
    </Placeholder>
    </Authorized>
    </>
}