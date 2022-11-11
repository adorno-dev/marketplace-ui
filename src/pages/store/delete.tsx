import { useCallback, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Placeholder } from "../../components"
import { Store } from "../../models/store"
import { storeService } from "../../services"

export const DeleteStore = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [store, setStore] = useState<Store>()
    const fetchData = useCallback(() => {
        storeService.getStore(id || '').then(res => res && setStore(res.data))
    }, [])
    const deleteUserStore = async () => {
        store?.id && await storeService.deleteUserStore(store.id)
        setStore(undefined)
        navigate("/store")
    }
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <DeleteStoreStyle>
            <h2>Delete Store</h2>
            <p>Are you sure want leave this store?</p>
            <div>
                <span>Name</span>
                <span>{store?.name}</span>
                <span>Profile</span>
                <span>{store?.profile}</span>
                <span>Politics</span>
                <span>{store?.politics}</span>
            </div>
            <span>
                <Link to={`/store`}>Back to Store</Link>
                <button onClick={deleteUserStore}>Confirm</button>
            </span>
        </DeleteStoreStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const DeleteStoreStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    min-width: 360px;
    white-space: pre-wrap;

    div {
        display: grid;
        grid-template-columns: repeat(2, auto);
        margin: 25px 0;
        min-width: 360px;
        max-width: 880px;

        > :nth-child(odd) {
            text-align: right;
            margin-right: 10px;
            color: gray;
            font-weight: bold;
        }
    }

    > span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 360px;
    }
`