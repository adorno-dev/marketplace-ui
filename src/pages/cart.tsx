import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Authorized, Navbar, Placeholder } from '../components'
import { CartResponse } from '../contracts/responses/cart-response'
import { CartService } from '../services/cart-service'

import './cart.scss'

export const Cart = () => {
    const navigate = useNavigate()
    const [cart, setCart] = useState<CartResponse>()
    const updateQuantity = (id: string, quantity: number) => {
        const newState = cart?.items.map(obj => {
            return obj.id === id ? {...obj, quantity: quantity > 0 ? quantity : 1} : obj
        })
        // setCartItems(newState)
    }
    const checkout = () => {
        navigate("/checkout")
    }
    useEffect(() => {
        CartService.getCarts()
                   .then(res => setCart(res.data))
    }, [])
    return <>
    <Authorized>
    <Navbar />
        <Placeholder>
            <section className="cart">
                <h2>My Cart</h2>
                <p>There's no products added in your cart. Except fake ones.</p>
                <ul>
                {
                    cart?.items.map(m =>
                        <li key={m.id}>
                            <img className="image" src="/public/assets/products/product-1.webp" />
                            <Link className="description" to="/">{m.description}</Link>
                            <div className="price">
                                <input type="number" 
                                    value={m.quantity} 
                                    onChange={(e)=>updateQuantity(m.id, parseInt(e.target.value))} />
                                <span> x $ {m.price}</span>
                            </div>
                            <span className="total">$ {m.quantity * m.price}</span>
                            <Link className="store" to="/{m.store}">VISIT STORE</Link>
                            <Link className="remove" to="/">
                                <span>REMOVE</span>
                                <i className="fa-solid fa-trash"></i>
                            </Link>
                        </li>
                    )
                }
                </ul>
                <div className="total">
                    <div>TOTAL</div>
                    <div>$ {cart?.items.reduce((sum, items) => sum + (items.quantity * items.price), 0)}</div>
                </div>
                <div >
                    <button onClick={checkout}>Check out</button>
                </div>
            </section>
        </Placeholder>
    </Authorized>
    </>
}