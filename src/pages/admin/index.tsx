import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Authorized, Navbar, Placeholder } from '../../components'

export * from '.'
export * from './categories'

export const Admin = () => {
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <AdminStyle>
            <h2>Marketplace</h2>
            <p>This page was made only for development purposes.</p>
            <div>
                <Link to="/admin/categories">[ Categories ]</Link>
                {/* <Link to="/admin/products">[ Products ]</Link> */}
            </div>
        </AdminStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const AdminStyle = styled.section`
    div {
        margin: 10px 0;
        a {
            margin: 0 10px 0 0;
        }
    }
`