import styled from "styled-components"
import { Store } from "../models/store"

export const StoreInfo = ({store}: {store?: Store}) => {
    const toDatetime = (timestamp: Date | undefined) => {
        const date = new Date(timestamp?.toString() ?? "")
        return date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: '2-digit'})
    }
    return <>
    <StoreInfoStyle>
        <div>
            <img className="logo" src={store?.logo} />
            <div>
                <b>{store?.name}</b>
                <p>Sold by: {store?.user.username}</p>
                <p>Joined: {toDatetime(store?.joined)}</p>
            </div>
        </div>
        <img className="banner" src={store?.banner} />
    </StoreInfoStyle>
    </>
}

export const StoreInfoStyle = styled.div`
    display: flex;
    align-items: center;
    div {
        display: inline-block;
        min-width: 220px;
        vertical-align: middle;
    }
    .logo {
        vertical-align: middle;
        margin: 0 10px 0 0;
    }

    @media only screen and (max-width: 942px)
    {
        .banner {
            display: none;
        }
    }
`