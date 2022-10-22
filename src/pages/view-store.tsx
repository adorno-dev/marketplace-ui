import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Navbar, Pagination, Placeholder } from "../components"
import { ProductList } from "../components/product-list"
import { StoreInfo } from "../components/store-info"
import { Store } from "../models/store"
import { storeService } from "../services"

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
        <ViewStoreStyle>
        <StoreInfo store={store} />
        <Pagination pageIndex={store?.pageIndex} pageCount={store?.pageCount} pageSize={store?.pageSize} paginate={fetchData} />
        <ProductList products={store?.items} />
        </ViewStoreStyle>
    </Placeholder>
    </>
}

export const ViewStoreStyle = styled.div`
    @media only screen and (max-width: 942px)
    {
        .banner {
            display: none;
        }
    }
`