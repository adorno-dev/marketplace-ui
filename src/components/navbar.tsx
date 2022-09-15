import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Searchbar } from './searchbar'
import { Usermenu } from './usermenu'

import './navbar.scss'

export const Navbar = () => {
    const searchbar = useRef<HTMLAnchorElement>(null)
    const usermenu = useRef<HTMLAnchorElement>(null)
    return <>
        <nav id="navbar">
            <div>
                <Link to="/" id="menuButton">
                    <i className="fa-solid fa-bars"></i>
                </Link>
                <Link to="/admin" id="adminButton">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                </Link>
            </div>
            <div>
                <Searchbar sender={searchbar} />
            </div>
            <div>
                <Link to="/"id="searchButton" ref={searchbar}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
                <Link to="/cart" id="cartButton">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <Link to="/favorites" id="favoriteButton">
                    <i className="fa-solid fa-heart"></i>
                </Link>
                <Link to="/signin" id="userButton" ref={usermenu}>
                    <i className="fa-solid fa-user"></i>
                </Link>
            </div>
        </nav>
        <Usermenu sender={usermenu} />
    </>
}