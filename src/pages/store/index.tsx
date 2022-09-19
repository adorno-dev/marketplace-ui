import { Link } from "react-router-dom"
import { Navbar, Placeholder } from "../../components"

import './index.scss'

export const Store = () => {
    return <>
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
    </>
}