import { Link, useParams } from "react-router-dom"
import { Authorized, Navbar, Placeholder } from "../../../components"

import './delete.scss'

export const DeleteProduct = () => {
    const {id} = useParams()
    const product = {id, name: "Product #1", description: "Product description #1", price: 100.00, quantity: 1, store: "A4U Store", reviews: 0}
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <div id="delete-product">
            <h2>Delete Product</h2>
            <p>Are you sure want delete the product below?</p>
            <div>
                <span>Name</span>
                <span>{product.name}</span>
                <span>Description</span>
                <span>{product.description}</span>
                <span>Store</span>
                <span>{product.store}</span>
                <span>Price</span>
                <span>$ {product.price}</span>
            </div>
            <span>
                <Link to="/admin/products">Back to Products</Link>
                <button>Confirm</button>
            </span>
        </div>
    </Placeholder>
    </Authorized>
    </>
}