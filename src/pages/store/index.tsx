import { useCallback, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Pagination, Placeholder } from "../../components"
import { StoreInfo } from "../../components/store-info"
import * as Models from "../../models/store"
import { storeService } from "../../services"

export const Store = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const [store, setStore] = useState<Models.Store | null>()
    const navigate = useNavigate()
    const fetchData = useCallback(()=>{
        storeService.getUserStore()
                    .then(res => res && setStore(res.data))
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
        <StoreUnavailable>
            <h2>You don't have a store yet.</h2>
            <p>Would you like to create one?.</p>
            <button onClick={()=>navigate("/store/new")}>Yes, Please</button>
            <button onClick={()=>navigate("/")}>Not Interessed</button>
        </StoreUnavailable>
        :
        <>
        <StoreInfo store={store} />
        <StoreViewer>
            <div className="options">
                <h3>Options</h3>
                <Link to={`/admin/products/${store.id}`}>Products</Link>
                <Link to="/store">Orders</Link>
                <Link to="/">Marketplace</Link>
                <Link to="/store" onClick={deleteUserStore}>Delete Store</Link>
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
        </StoreViewer>
        </>
    }
    </Placeholder>
    </Authorized>
    </>
}

export const StoreViewer = styled.section`
    display: grid;
    grid-template-columns: 280px 1fr;

    div.options {
        display: flex;
        flex-direction: column;
        // max-width: 220px;
        width: 280px;
        a {
            margin: 5px 0;
        }
    }
`
export const StoreUnavailable = styled.section`
    max-width: 430px;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
    p, a, button {
        margin: 15px;
    }
    button {
        min-width: 170px;
    }
`