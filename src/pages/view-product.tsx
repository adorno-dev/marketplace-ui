import { useCallback, useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Navbar, Placeholder } from "../components"
import { Product } from "../models"
import { cartService, productService } from "../services"

export const ViewProduct = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const image = useRef<HTMLImageElement>(null)
    const title = useRef<HTMLHeadingElement>(null)
    const price = useRef<HTMLHeadingElement>(null)
    const {id} = useParams()
    const navigate = useNavigate()
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
    }, [fetchData, title.current?.clientHeight])
    return <>
    <Navbar />
    <Placeholder>
    {
        <ViewProductStyle>
            <div>
                <h2 ref={title}>{product?.name}</h2>
                <img ref={image} src={product?.screenshoots?.at(0) ?? ""} />
                <div>
                {
                    product?.screenshoots?.map((screenshoot, index) => 
                        <img key={index} className="small" src={screenshoot} onClick={viewImage} />)
                }
                </div>
                <p>{product?.description}</p>
            </div>
            <div>
                <h2 ref={price} style={{height: title.current?.clientHeight}}>{product?.price && currency.format(product.price).replace("$", "$ ")}</h2>
                {! product?.cart && <button onClick={addToCart}>Add To Cart</button>}
                <button>Buy Now</button>
                <button onClick={favorite}>{product?.favorite ? "Unfavorite" : "Favorite"}</button>
                <b>{product?.store?.name}</b>
                <button onClick={()=>navigate(`/stores/${product?.store?.id}`)}>Visit the Store</button>
                <br />
                <button onClick={()=>navigate("/")}>Go to Marketplace</button>
            </div>
        </ViewProductStyle>
    }
    </Placeholder>
    </>
}

export const ViewProductStyle = styled.div`
    display: flex;

    @media only screen and (max-width: 880px) {
        flex-direction: column;
        div:last-child {
            margin: 10px 0 0;
            max-width: unset !important;
            button {
                max-width: 415px;
            }
        }
    }

    margin: 0 auto;
    max-width: 880px;
    justify-content: space-between;
    gap: 0 10px;
    padding: 10px 0;

    div:first-child {
        display: flex;
        flex-direction: column;
        gap: 8px 0;
        width: 100%;
        white-space: pre-wrap;
        > img {
            object-fit: cover;
            max-width: 625px;
            max-height: 400px;
            height: 400px;
            width: 625px;
        }

        div {
            img {
                object-fit: cover;
                width: 48px;
                height: 48px;
                margin-right: 10px;
                cursor: pointer;
            }    
        }
    }

    div:last-child {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8px 0;
        text-align: right;
        min-width: 250px;
        max-width: 250px;
        a,
        button {
            width: 100%;
        }
    }
`