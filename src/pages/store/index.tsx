import { Link } from "react-router-dom"
import { Authorized, Navbar, Placeholder } from "../../components"

import './index.scss'

export const Store = () => {
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <section className="store">
            <h2>Store Section</h2>
            <p>Manage your marketplace store and your products.</p>
            <div>
                <Link to="/store/new">Create my store</Link>
            </div>
        </section>
    </Placeholder>
    </Authorized>
    </>
}