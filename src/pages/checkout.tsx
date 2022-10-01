import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Authorized, Navbar, Placeholder } from '../components'
import { CartResponse } from '../contracts/responses/cart-response'
import { cartService } from '../services/cart-service'

import './checkout.scss'

export const Checkout = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const navigate = useNavigate()
    const [cart, setCart] = useState<CartResponse>()
    const checkout = () => {
        navigate("/checkout-completed")
    }
    useEffect(() => {
        cartService.getCarts()
                   .then(res => setCart(res.data))
    }, [])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <section className="checkout">
            <div>
                <h2>Check out</h2>
                <p>Confirm your billing information to complete the check out.</p>
                <ul>
                {
                    cart?.items.map(m =>
                        <li key={m.id}>
                            <div>{m.description}</div>
                            <div>
                                <span>(Qty x Unit): {m.quantity} x {currency.format(m.price).replace("$", "$ ")}</span>
                                <b>{currency.format(m.price).replace("$", "$ ")}</b>
                            </div>
                        </li>
                    )
                }
                </ul>
                <div className="total">
                    <div>TOTAL</div>
                    <div>{currency.format(cart?.items.reduce((sum, items) => sum + (items.quantity *  items.price), 0) ?? 0).replace("$", "$ ")}</div>
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
                        <Link to="/cart">Back to Cart</Link>
                        <button onClick={checkout}>Buy Now</button>
                    </div>
                </form>
            </div>
            
        </section>
    </Placeholder>
    </Authorized>
    </>
}