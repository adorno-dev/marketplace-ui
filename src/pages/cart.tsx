import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Authorized, Navbar, Placeholder } from '../components'
import * as C from '../models/cart'
import { cartService } from '../services/cart-service'

import './cart.scss'

export const Cart = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const navigate = useNavigate()
    const [cart, setCart] = useState<Partial<C.Cart>>()
    const fetchData = useCallback(()=>{
        cartService.getCarts()
                   .then(res => res !== undefined && setCart(res.data))
    }, [])
    const updateQuantity = (id: string, quantity: number) => {
        const newState = cart?.items?.map(obj => {
            return obj.id === id ? {...obj, quantity: quantity > 0 ? quantity : 1} : obj
        })
        setCart(c => { return {...c, items: newState } })
    }
    const removeItem = async (e: any) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute("data-id")
        await cartService.removeItem(id)
                         .then(res => res !== undefined && setCart(res.data))
        fetchData()
    }
    const checkout = () => {
        navigate("/checkout")
    }

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return <>
    <Authorized>
    <Navbar />
        <Placeholder>
            <section className="cart">
                <h2>My Cart</h2>
                <p>There's no products added in your cart. Except fake ones.</p>
                <ul>
                {
                    cart?.items &&
                    cart?.items.map(m =>
                        <li key={m.id}>
                            <img className="image" src={m.screenshoot} />
                            <Link className="description" to={`/products/${m.productId}`}>{m.description}</Link>
                            <div className="price">
                                <input type="number" 
                                    value={m.quantity} 
                                    onChange={(e)=>updateQuantity(m.id, parseInt(e.target.value))} />
                                <span> x {currency.format(m.price).replace("$", "$ ")}</span>
                            </div>
                            <span className="total">{currency.format(m.quantity * m.price).replace("$", "$ ")}</span>
                            <Link className="store" to="/{m.store}">VISIT STORE</Link>
                            <Link className="remove" to="/cart" data-id={m.id} onClick={removeItem}>
                                <span>REMOVE</span>
                                <i className="fa-solid fa-trash"></i>
                            </Link>
                        </li>
                    )
                }
                </ul>
                <div className="total">
                    <div>TOTAL</div>
                    <div>
                        {
                            currency.format(
                                cart?.items && cart?.items.reduce((sum, items) => sum + (items.quantity * items.price), 0) || 0)
                                    .replace("$", "$ ")
                        }
                    </div>
                </div>
                <div >
                    {cart?.items && <button onClick={checkout}>Check out</button>}
                </div>
            </section>
        </Placeholder>
    </Authorized>
    </>
}