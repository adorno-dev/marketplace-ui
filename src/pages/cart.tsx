import { useState } from 'react'
import { Navbar, Placeholder } from '../components'
import { CartItem } from '../models/cart-item'

import './cart.scss'

export const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {id: 1, description: "Pistola Taurus G3c T.O.R.O. - 9x19mm", store: "A4U Store", quantity: 1, price: 1000.00},
        {id: 2, description: "Pistola Taurus .9MM TS9/17 4\" CAFO",  store: "A4U Store", quantity: 2, price: 1000.00 },
        {id: 3, description: "Revólver Taurus .357 MAG RT608/8 6,5\" INAB", store: "A4U Store", quantity: 3, price: 1000.00 },
    ])
    return <>
        <Navbar />
        <Placeholder>
            <section className="cart">
                <h2>My Cart</h2>
                <p>There's no products added in your cart. Except fake ones.</p>
                <ul>
                    <li>
                        <span>Description</span>
                        <span>Unit Price</span>
                        <span>Quantity</span>
                    </li>
                    {cartItems.map(m => 
                        <li key={m.id}>
                            <span>{m.description}</span>
                            <span>{m.price}</span>
                            <span>{m.quantity}</span>
                        </li>
                    )}
                </ul>
            </section>
        </Placeholder>
    </>
}