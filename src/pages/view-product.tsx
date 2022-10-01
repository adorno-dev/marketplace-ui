import { useCallback, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar, Placeholder } from "../components"
import { Product } from "../models"
import { cartService, productService } from "../services"

import './view-product.scss'

export const ViewProduct = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const image = useRef<HTMLImageElement>(null)
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
    const addToCart = async () => {
        product?.id && await cartService.addItem(product.id)
        fetchData()
    }
    const removeFromCart = async () => {
        product?.id && await cartService.removeItem(product.id)
        fetchData()
    }
    const viewImage = async (e: any) => {
        image.current?.setAttribute("src", e.currentTarget.src)
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
                <div><img ref={image} src={product?.screenshoots?.at(0) ?? ""} /></div>
                <div>
                    {product.screenshoots?.map((screenshoot, index) => <img key={index} className="small" src={screenshoot} onClick={viewImage} />)}
                </div>
                            </div>
            <p>{product?.description}</p>
        </div>
        <div>
            <h2>{product?.price && currency.format(product.price).replace("$", "$ ")}</h2>
            {! product.cart && <button onClick={addToCart}>Add To Cart</button>}
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