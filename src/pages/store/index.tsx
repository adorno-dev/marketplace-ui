import { Link } from "react-router-dom"
import { Navbar, Placeholder } from "../../components"

import './index.scss'

export const Store = () => {
    return <>
    <Navbar />
    <Placeholder>
        <section className="store">
            <h2>My Store</h2>
            <p>Manage your marketplace store and your products.</p>
            <div>
                <Link to="/store/new">New Store</Link>
                <Link to="/store/new">New Product</Link>
            </div>
        </section>
    </Placeholder>
    </>
}