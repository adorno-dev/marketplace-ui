import { useState } from "react"
import { Navbar, Placeholder } from "../../../components"
import { Product } from "../../../models"

import './index.scss'

export const Products = () => {
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
    return <>
    <Navbar />
    <Placeholder>
        <section id="products">
            <h2>Products</h2>
            <p>There are {products.length} products available.</p>
        </section>
    </Placeholder>
    </>
}