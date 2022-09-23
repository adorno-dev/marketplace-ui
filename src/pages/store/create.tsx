import { FormEvent, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Authorized, ImageBrowser, ImageViewer, Navbar, Placeholder } from "../../components"
import { storeService } from "../../services/store-service"

import './create.scss'

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
        <form method="POST" id="store" ref={form} onSubmit={submitHandler} encType="multipart/form-data">
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
        </form>
    </Placeholder>
    </Authorized>
    </>
}