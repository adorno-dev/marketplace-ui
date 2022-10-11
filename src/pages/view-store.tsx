import { useCallback, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Navbar, Placeholder } from "../components"
import { Store } from "../models/store"
import { storeService } from "../services"

import './view-store.scss'

export const ViewStore = () => {
    const {id} = useParams()
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const [store, setStore] = useState<Store>()
    const fetchData = useCallback(()=>{
        id && storeService.getStore(id)
                          .then(res => setStore(res.data))
    }, [])
    const toDatetime = (timestamp: Date | undefined) => {
        const date = new Date(timestamp?.toString() ?? "")
        return date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: '2-digit'})
    }
    useEffect(()=>{
        fetchData()
    }, [fetchData])
    return <>
    <Navbar />
    <Placeholder>
        <div className="view-store">
            <div className="hflex">
                <div>
                    <img src={store?.logo} />
                    <div>
                        <b>{store?.name}</b>
                        <p>Sold by: {store?.user.username}</p>
                        <p>Joined: {toDatetime(store?.joined)}</p>
                    </div>
                </div>
                <img src={store?.banner} />
            </div>       
            <div className="hflex">
                <div>
                    <h3>Welcome</h3>
                </div>
                <ul className="products">
                    {
                        store?.products?.map(p => 
                            <li key={p.id}>
                                <Link to={`/products/${p.id}`}>
                                    <img src={p.screenshoot} />
                                </Link>
                                <Link className="product" to={`/products/${p.id}`}>{p.name}</Link>
                                <div className="split">
                                    <span className="reviews">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <Link to="reviews">0 Reviews</Link>
                                    </span>
                                    <span className="price">{currency.format(p.price).replace("$", "$ ")}</span>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </Placeholder>
    </>
}