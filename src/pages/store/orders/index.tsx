import { useCallback, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Placeholder } from "../../../components"
import { OrderItem } from "../../../models/order-item"
import { orderService } from "../../../services/order-service"

export const Orders = () => {
    const {id} = useParams()
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const [orderItems, setOrderItems] = useState<OrderItem[]>()
    const fetchData = useCallback(() => {
        orderService.getOrders().then(res => res && setOrderItems(res.data))
    }, [])
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return <>
        <Authorized>
        <Navbar />
        <Placeholder>
            <OrdersStyle>
                <h2>Orders</h2>
                <p>There are {orderItems?.length} orders available.</p>
                <Link to="/store">Back to store</Link>
                <table>
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                            <th>TOTAL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderItems?.map(m => 
                                <tr key={m.id}>
                                    <td>{m.productName}</td>
                                    <td>x {m.quantity}</td>
                                    <td>{currency.format(m.price).replace("$", "$ ")}</td>
                                    <td>{currency.format(m.quantity * m.price).replace("$", "$ ")}</td>
                                    <td>
                                        {/* <Link to={`/store/${id}`}>CONFIRM</Link> */}
                                        <button>Confirm</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </OrdersStyle>
        </Placeholder>
        </Authorized>
    </>
}

export const OrdersStyle = styled.section`
    p {
        margin: 0 0 10px;
    }
    table {
        margin: 10px 0 0;
        width: 100%;
        th {
            text-align: left;
        }
        th,td {
            padding: 7px 10px 7px 0;
            border-bottom: 1px solid #424242;
        }
    }
`