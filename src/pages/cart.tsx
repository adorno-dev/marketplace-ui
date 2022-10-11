import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Authorized, Navbar, Pagination, Placeholder } from '../components'
import * as C from '../models/cart'
import { cartService } from '../services/cart-service'

import './cart.scss'

export const Cart = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const navigate = useNavigate()
    const [cart, setCart] = useState<Partial<C.Cart>>()
    const fetchData = useCallback((pageIndex?: number, pageSize?: number)=>{
        cartService.getCarts({pageIndex})
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
    const checkout = async () => {
        const productId = cart?.items?.map(m => m.productId)
        const quantity = cart?.items?.map(m => m.quantity)
        
        await cartService.checkout({productId, quantity}) && navigate("/checkout")
    }

    useEffect(() => {
        fetchData(1)
    }, [fetchData])
    return <>
    <Authorized>
    <Navbar />
        <Placeholder>
            <section className="cart">
                <h2>My Cart</h2>
                {
                    cart?.items && cart.items.length  > 0 ?
                    <p>Your cart have <b>{cart.items.length}</b> product(s) added.</p>:
                    <p>There's no products added in this cart.</p>
                }
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
                            <Link className="store" to={`/stores/${m.storeId}`}>VISIT STORE</Link>
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
                {
                    cart?.items?.length !== undefined && cart.items.length > 0 && 
                    <Pagination pageIndex={cart?.pageIndex} pageCount={cart?.pageCount} paginate={fetchData} />
                }
                <div >
                    {cart?.items && <button onClick={checkout}>Check out</button>}
                </div>
            </section>
        </Placeholder>
    </Authorized>
    </>
}