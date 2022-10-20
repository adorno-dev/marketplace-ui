import { useCallback, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Navbar, Pagination, Placeholder } from "../components"
import { StoreInfo } from "../components/store-info"
import { Store } from "../models/store"
import { storeService } from "../services"

import './view-store.scss'

export const ViewStore = () => {
    const {id} = useParams()
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const [store, setStore] = useState<Store>()
    const fetchData = useCallback((pageIndex?: number, pageSize?: number)=>{
        id && storeService.getStorePaginated({id, props: {pageIndex}})
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
        <StoreInfo store={store} />
        <Pagination pageIndex={store?.pageIndex} pageCount={store?.pageCount} pageSize={store?.pageSize} paginate={fetchData} />
        <ul className="products">
            {
                store?.items?.map(p => 
                    <li key={p.id}>
                        <Link to={`/products/${p.id}`}>
                            <img src={p.screenshoot} />
                        </Link>
                        <Link className="product" to={`/products/${p.id}`}>{p.name}</Link>
                        <Link className="store" to={`/stores/${store.id}`}>{store.name}</Link>
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
        
    </Placeholder>
    </>
}