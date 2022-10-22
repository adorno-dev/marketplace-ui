import { FormEvent, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Authorized, ImageBrowser, ImageViewer, Navbar, Placeholder } from "../../components"
import { storeService } from "../../services/store-service"

export const NewStore = () => {
    const form = useRef<HTMLFormElement>(null)
    const navigate = useNavigate()
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        
        if (form.current) {
            const {status} = await storeService.createStore(new FormData(form.current))
            if (status == 200)
                navigate("/store")
        }
    }
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <NewStoreStyle method="POST" ref={form} onSubmit={submitHandler} encType="multipart/form-data">
            <h2>Create Store</h2>
            <p>Please fill all required fields to set up your store.</p>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="url" placeholder="URL" />
            <ImageBrowser name="logo" placeholder="Logo" />
            <ImageViewer name="logo" />
            <ImageBrowser name="banner" placeholder="Banner" />
            <ImageViewer name="banner" />
            <textarea name="profile" placeholder="Profile"></textarea>
            <textarea name="politics" placeholder="Politics"></textarea>
            <div>
                <Link to="/store">Back to store</Link>
                <button type="submit">Confirm</button>
            </div>
        </NewStoreStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const NewStoreStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 450px;
    margin: 0 auto;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 35px;
        width: 100%;
    }

    > div:last-child {
        justify-content: space-between;
    }
`