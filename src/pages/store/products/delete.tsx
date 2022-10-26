import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Placeholder } from "../../../components"
import { Product } from "../../../models"
import { productService } from "../../../services/product-service"

export const DeleteProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState<Product>()
    const deleteProduct = () => {
        id && 
        productService.deleteProduct(id)
        navigate(`/store/${product?.store.id}/products`)
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
        <DeleteProductStyle>
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
                <Link to={`/store/${product?.store.id}/products`}>Back to Products</Link>
                <button onClick={deleteProduct}>Confirm</button>
            </span>
        </DeleteProductStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const DeleteProductStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    min-width: 360px;
    white-space: pre-wrap;

    div {
        display: grid;
        grid-template-columns: repeat(2, auto);
        margin: 25px 0;
        min-width: 360px;
        max-width: 880px;

        > :nth-child(odd) {
            text-align: right;
            margin-right: 10px;
            color: gray;
            font-weight: bold;
        }
    }

    > span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 360px;
    }
`