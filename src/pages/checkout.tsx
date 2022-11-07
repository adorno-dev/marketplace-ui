import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Authorized, Navbar, Placeholder } from '../components'
import { CartResponse } from '../contracts/responses/cart-response'
import { cartService } from '../services/cart-service'
import { orderService } from '../services/order-service'

export const Checkout = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const navigate = useNavigate()
    const [cart, setCart] = useState<CartResponse>()
    const fetchData = useCallback(() => {
        cartService.getCarts()
                   .then(res => setCart(res.data))
    }, [])
    const checkout = (e: FormEvent) => {
        e.preventDefault()
        orderService.placeOrder()
            // .then(res => res && res.status === 200 && navigate("/checkout-completed"))
            .then(res => {
                if (res && res.status === 200) {
                    localStorage.setItem("o", res.data)
                    navigate("/checkout-completed")
                }
            })
    }
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <CheckoutStyle>
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
                                <b>{currency.format(m.price * m.quantity).replace("$", "$ ")}</b>
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
                <form method='POST'>
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
            
        </CheckoutStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const CheckoutStyle = styled.section`
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    @media only screen and (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
        > div {
            width: calc(50% - 20px);
        }
    }

    > div:first-child {
        ul {
            list-style: none;
            margin: 10px 0;
            font-size: .95em;
    
            display: flex;
            flex-direction: column;
    
            li {
                margin: 5px 0;
                > div:first-child {
                    font-weight: bold;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                > div:last-child {
                    display: flex;
                    font-size: .95em;
                    font-style: italic;
                    justify-content: space-between;
                    border-bottom: 1px solid #424242;
                    padding: 5px 0;
                }
            }
        }
        > .total {
            font-size: .85em;
            :last-child {
                font-weight: bold;
                font-size: 1em;
            }
        }
    
        > div {
            text-align: right;
            align-items: center;
            margin: 10px 0 0;
        }
    }

    > div:last-child {
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 10px 0;

            > div {
                display: flex;
                gap: inherit;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
`