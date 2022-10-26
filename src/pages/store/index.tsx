import { useCallback, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Pagination, Placeholder } from "../../components"
import { ProductList } from "../../components/product-list"
import { StoreInfo } from "../../components/store-info"
import * as Models from "../../models/store"
import { productService, storeService } from "../../services"

export const Store = () => {
    const [store, setStore] = useState<Models.Store | undefined>()
    const navigate = useNavigate()
    const fetchData = useCallback((pageIndex?: number, pageSize?: number) => {
        storeService.getUserStore().then(res => res && setStore(res.data))
        store?.id && productService.getStoreProducts({
            storeId: store?.id, 
            props: {pageIndex: pageIndex, pageSize: pageSize}
        })
        .then(res => res && setStore(s => { return {...s, 
            items: res.data.items,
            pageIndex: res.data.pageIndex,
            pageCount: res.data.pageCount,
            pageSize: res.data.pageSize
        } as Models.Store}))
    }, [store?.id])
    const deleteUserStore = async () => {
        store?.id && await storeService.deleteUserStore(store.id)
        setStore(undefined)
    }
    useEffect(()=>{
        fetchData(1)
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
                <Link to={`/store/${store.id}/products`}>Products</Link>
                <Link to="/store">Orders</Link>
                <Link to="/">Marketplace</Link>
                <Link to="/store" onClick={deleteUserStore}>Delete Store</Link>
            </div>
            <div>
                <Pagination pageIndex={store.pageIndex} pageSize={store.pageSize} pageCount={store.pageCount} paginate={fetchData} />
                <ProductList products={store.items} />
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