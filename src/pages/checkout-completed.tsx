import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Placeholder } from "../components"

export const CheckoutCompleted = () => {
    const navigate = useNavigate()
    const marketplace = () => {
        navigate("/")
    }
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <CheckoutCompletedStyle>
            <h2>Congratulations</h2>
            <p>Thanks for your payment.</p>
            <i className="fa-regular fa-circle-check"></i>
            <p>Your order number is: <b>#123456</b></p>
            <button onClick={marketplace}>Return to marketplace</button>
        </CheckoutCompletedStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const CheckoutCompletedStyle = styled.section`
    display: grid;
    justify-content: center;
    margin: 0 auto;
    text-align: center;

    > i {
        font-size: 7em;
        color: #9cbb6d;
        margin: 20px;
    }

    button {
        margin: 10px 0;
        width: 320px;
    }
`