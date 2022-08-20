import { useState } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export const Navbar = () => {
    return (
        <div id="navbar">
            <div>
                <Link id="brand" to="/">Marketplace</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
    )
}