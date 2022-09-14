import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Placeholder } from '../components'
import { CartItem } from '../models/cart-item'

import './checkout.scss'

export const Checkout = () => {
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {id: 1, description: "Pistola Taurus G3c T.O.R.O. - 9x19mm", store: "A4U Store", quantity: 1, price: 1000.55 },
        {id: 2, description: "Pistola Taurus .9MM TS9/17 4\" CAFO",  store: "A4U Store", quantity: 2, price: 1000.00 },
        {id: 3, description: "Revólver Taurus .357 MAG RT608/8 6,5\" INAB", store: "A4U Store", quantity: 1, price: 1000.00 },
        {id: 4, description: "Pistola Beretta APX", store: "A4U Store", quantity: 3, price: 1000.00 },
        {id: 5, description: "COLDRE KYDEX IWB INVICTUS TAURUS SÉRIE 100", store: "A4U Store", quantity: 5, price: 1000.00 }
    ])
    const cart = () => {
        navigate("/cart")
    }
    const checkout = () => {
        navigate("/checkout-completed")
    }
    return <>
    <Navbar />
    <Placeholder>
        <section className="checkout">
            <div>
                <h2>Check out</h2>
                {/* <p>Confirm your billing information to complete the check out.</p> */}
                <ul>
                {
                    cartItems.map(m =>
                        <li key={m.id}>
                            <div>{m.description}</div>
                            <div>
                                <span>(Qty x Unit): {m.quantity} x $ {m.price}</span>
                                <b>$ {m.price}</b>
                            </div>
                        </li>
                    )
                }
                </ul>
                <div className="total">
                    <div>TOTAL</div>
                    <div>$ {cartItems.reduce((sum, items) => sum + (items.quantity * items.price), 0)}</div>
                </div>
            </div>

            <div>
                <h2>Billing information</h2>
                <p>Confirm your billing information to complete the check out.</p>
                <form>
                    <div>
                        <input type="text" name="firstname" placeholder="First Name" />
                        <input type="text" name="lastname" placeholder="Last Name" />
                    </div>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="text" name="phone" placeholder="Phone Number" />
                    <div>
                        <input type="text" name="cardnumber" placeholder="Card Number" />
                        <input type="text" name="nameoncard" placeholder="Name On Card" />
                    </div>
                    <div>
                        <input type="text" name="cvv" placeholder="CVV" />
                        <input type="text" name="expiredate" placeholder="MMYY" />
                    </div>
                    <div>
                        <span></span>
                        <span>
                            <button onClick={cart}>My Cart</button>
                            <button onClick={checkout}>Buy Now</button>
                        </span>
                    </div>
                </form>
            </div>
            
        </section>
    </Placeholder>
    </>
}