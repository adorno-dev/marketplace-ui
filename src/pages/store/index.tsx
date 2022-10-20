import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Authorized, Navbar, Pagination, Placeholder } from "../../components"
import { StoreInfo } from "../../components/store-info"
import * as Models from "../../models/store"
import { storeService } from "../../services"

import './index.scss'

export const Store = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const [store, setStore] = useState<Models.Store | null>()
    const fetchData = useCallback(()=>{
        storeService.getUserStore()
                    .then(res => setStore(res.data))
    }, [])
    const toDatetime = (timestamp: Date | undefined) => {
        const date = new Date(timestamp?.toString() ?? "")
        return date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: '2-digit'})
    }
    const deleteUserStore = async () => {
        store?.id && await storeService.deleteUserStore(store.id)
        setStore(null)
    }
    useEffect(()=>{
        fetchData()
    }, [fetchData])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>   
    {
        ! store ?
        <section className="store">
            <h2>You don't have a store yet.</h2>
            <p>Would you like to create one?.</p>
            <Link to="/store/new">[ Yes, please ]</Link>
            <Link to="/">[ Not interessed ]</Link>
        </section>
        :
        <>
        
        <StoreInfo store={store} />

        <div className="viewer">

            <div className="options">
                <h3>Options</h3>
                <Link to={`/admin/products/${store.id}`}>Products</Link>
                <Link to="/store">Orders</Link>
                <Link to="/">Marketplace</Link>
            </div>

            <div>
                <Pagination pageIndex={store?.pageIndex} pageCount={store?.pageCount} pageSize={store?.pageSize} paginate={fetchData} />
                <ul className="products">
                {
                    store?.items?.map(p => 
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

        </>
    }
    </Placeholder>
    </Authorized>
    </>
}