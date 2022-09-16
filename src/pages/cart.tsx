import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Placeholder } from '../components'
import { CartItem } from '../models/cart-item'

import './cart.scss'

export const Cart = () => {
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {id: 1, description: "Pistola Taurus G3c T.O.R.O. - 9x19mm", store: "A4U Store", quantity: 1, price: 1000.55 },
        {id: 2, description: "Pistola Taurus .9MM TS9/17 4\" CAFO",  store: "A4U Store", quantity: 2, price: 1000.00 },
        {id: 3, description: "Revólver Taurus .357 MAG RT608/8 6,5\" INAB", store: "A4U Store", quantity: 1, price: 1000.00 },
        {id: 4, description: "Pistola Beretta APX", store: "A4U Store", quantity: 3, price: 1000.00 },
        {id: 5, description: "COLDRE KYDEX IWB INVICTUS TAURUS SÉRIE 100", store: "A4U Store", quantity: 5, price: 1000.00 }
    ])
    const updateQuantity = (id: number, quantity: number) => {
        const newState = cartItems.map(obj => {
            return obj.id === id ? {...obj, quantity: quantity > 0 ? quantity : 1} : obj
        })
        setCartItems(newState)
    }
    const checkout = () => {
        navigate("/checkout")
    }
    return <>
        <Navbar />
        <Placeholder>
            <section className="cart">
                <h2>My Cart</h2>
                <p>There's no products added in your cart. Except fake ones.</p>
                <ul>
                {
                    cartItems.map(m =>
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
                    <div>$ {cartItems.reduce((sum, items) => sum + (items.quantity * items.price), 0)}</div>
                </div>
                <div >
                    <button onClick={checkout}>Check out</button>
                </div>
            </section>
        </Placeholder>
    </>
}