import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Authorized, Navbar, Pagination, Placeholder } from "../../../components"
import { Paginated } from "../../../contracts/responses/paginated-response"
import { ProductResponse } from "../../../contracts/responses/product-response"
import { ProductService } from "../../../services/product-service"

import './index.scss'

export const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState<Paginated<ProductResponse>>()
    const createHandler = () => {
        navigate("/admin/products/new")
    }
    useEffect(() => {
        ProductService.getProducts()
                      .then(res => setProducts(res.data))
    }, [])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <section id="products">
            <h2>Products</h2>
            <p>There are {products?.totalItems} products available.</p>
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
                products?.items.map(m =>
                    <li key={m.id}>
                        <span>{m.name}</span>
                        <span className="columns">{m.store.name}</span>
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