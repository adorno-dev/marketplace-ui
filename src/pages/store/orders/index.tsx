import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Authorized, Navbar, Placeholder } from "../../../components"
import { OrderItem } from "../../../models/order-item"
import { orderService } from "../../../services/order-service"

export const Orders = () => {
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
            <h2>Orders</h2>
            <Link to="/store">Back to store</Link>

            <ul>
                {orderItems?.map(m => <li key={m.id}>{m.quantity} x {m.productName}</li>)}
            </ul>

        </Placeholder>
        </Authorized>
    </>
}