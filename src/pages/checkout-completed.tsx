import { useNavigate } from "react-router-dom"
import { Navbar, Placeholder } from "../components"

import './checkout-completed.scss'

export const CheckoutCompleted = () => {
    const navigate = useNavigate()
    const marketplace = () => {
        navigate("/")
    }
    return <>
    <Navbar />
    <Placeholder>
        <section className="checkout-completed">
            <h2>Congratulations</h2>
            <p>Thanks for your payment.</p>
            <i className="fa-regular fa-circle-check"></i>
            <p>Your order number is: <b>#123456</b></p>
            <button onClick={marketplace}>Return to marketplace</button>
        </section>
    </Placeholder>
    </>
}