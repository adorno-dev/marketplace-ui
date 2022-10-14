import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Authorized, Navbar, Placeholder } from "../../components"
import * as Models from "../../models/store"
import { storeService } from "../../services"

import './index.scss'

export const Store = () => {
    const [store, setStore] = useState<Models.Store | null>()
    const fetchData = useCallback(()=>{
        storeService.getUserStore()
                    .then(res => setStore(res.data))
    }, [])
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
            <h2>Store Section</h2>
            <p>You don't have a store yet.</p>
            <div>
                <Link to="/store/new">Create my store</Link>
            </div>
        </section> :
        <section className="store">
            <h2>{store.name}</h2>
            <Link to={`/stores/${store.id}`}>Visit the store</Link>
            <p>Sold by {store.user.username}</p>
            <div>
                <img src={store.logo} />
                <img src={store.banner} />
            </div>
            <Link to="/store" onClick={deleteUserStore}>Delete this store</Link>
        </section>
    }
    </Placeholder>
    </Authorized>
    </>
}