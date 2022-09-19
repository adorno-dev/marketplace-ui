import { Link } from "react-router-dom"
import { ImageBrowser, ImageViewer, Navbar, Placeholder } from "../../components"

import './create.scss'

export const NewStore = () => {
    return <>
    <Navbar />
    <Placeholder>
        <form id="store">
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
                <button>Confirm</button>
            </div>
        </form>
    </Placeholder>
    </>
}