import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar, Placeholder } from "../components"
import { Store } from "../models/store"
import { storeService } from "../services"

import './view-store.scss'

export const ViewStore = () => {
    const {id} = useParams()
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
            <img src={store?.logo} />
                <div>
                    <b>{store?.name}</b>
                    
                    <p>Sold by: {store?.user.username}</p>
                    <p>Joined: {toDatetime(store?.joined)}</p>
                </div>
                <img src={store?.banner} />
            </div>       
        </div>
    </Placeholder>
    </>
}