import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Authorized, Navbar, Placeholder } from "../../../components"
import { Product } from "../../../models"
import { productService } from "../../../services/product-service"

import './delete.scss'

export const DeleteProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState<Product>()
    const deleteProduct = () => {
        id && 
        productService.deleteProduct(id)
        navigate("/admin/products")
    }
    useEffect(() => {
        id &&
        productService.getProduct(id)
            .then(res => setProduct(res.data))
    }, [])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <div id="delete-product">
            <h2>Delete Product</h2>
            <p>Are you sure want delete the product below?</p>
            <div>
                <span>Name</span>
                <span>{product?.name}</span>
                <span>Description</span>
                <span>{product?.description}</span>
                <span>Store</span>
                <span>{product?.store.name}</span>
                <span>Price</span>
                <span>$ {product?.price}</span>
            </div>
            <span>
                <Link to="/admin/products">Back to Products</Link>
                <button onClick={deleteProduct}>Confirm</button>
            </span>
        </div>
    </Placeholder>
    </Authorized>
    </>
}