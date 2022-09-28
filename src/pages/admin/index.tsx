import { Link } from 'react-router-dom'
import { Authorized, Navbar, Placeholder } from '../../components'

export * from '.'
export * from './categories'

import './index.scss'

export const Admin = () => {
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <section id="admin">
            <h2>Marketplace</h2>
            <p>This page was made only for development purposes.</p>
            <div>
                <Link to="/admin/categories">[ Categories ]</Link>
                <Link to="/admin/products">[ Products ]</Link>
            </div>
        </section>
    </Placeholder>
    </Authorized>
    </>
}