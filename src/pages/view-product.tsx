import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar, Placeholder } from "../components"
import { Product } from "../models"
import { cartService, productService } from "../services"

import './view-product.scss'

export const ViewProduct = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const {id} = useParams()
    const [product, setProduct] = useState<Partial<Product>>()
    const fetchData = useCallback(()=>{
        id && productService.getProduct(id)
                            .then(res => res !== undefined && setProduct(res.data))
    }, [])
    const favorite = () => {
        setProduct(p => {return {...p, favorite: !p?.favorite}})

        if (product?.id)
            product?.favorite ? 
                productService.unfavorite(product.id) :
                productService.favorite(product?.id)
    }
    const addToCart = () => {
        product?.id && cartService.addItem(product.id)
        fetchData()
    }
    const removeFromCart = () => {
        product?.id && cartService.removeItem(product.id)
        fetchData()
    }
    useEffect(()=>{
        fetchData()
    }, [fetchData])
    return <>
    <Navbar />
    <Placeholder>
    {
        product &&
        <div className="view-product">
        <div>
            <h2>{product?.name}</h2>
            <div>
                <img src={product?.screenshoots?.at(0) ?? ""} />
            </div>
            <p>{product?.description}</p>
        </div>
        <div>
            <h2>{product?.price && currency.format(product.price).replace("$", "$ ")}</h2>
            <button onClick={addToCart}>Add To Cart</button>
            <button>Buy Now</button>
            <button onClick={favorite}>{product?.favorite ? "Unfavorite" : "Favorite"}</button>
            <span />
            <b>{product.store?.name}</b>
            <button>Visit the Store</button>
        </div>
    </div>
    }
    </Placeholder>
    </>
}