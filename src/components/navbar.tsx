import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { Searchbar } from './searchbar'

export const Navbar = () => {
    const searchbar = useRef<HTMLAnchorElement>(null)
    return (
        <nav id="navbar">
            <div>
                <Link to="/menu" id="menuButton">
                    <i className="fa-solid fa-bars"></i>
                </Link>
            </div>
            <div>
                <Searchbar sender={searchbar} />
            </div>
            <div>
                <Link to="#"id="searchButton" ref={searchbar}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
                <Link to="/cart" id="cartButton">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <Link to="/favorites" id="favoriteButton">
                    <i className="fa-solid fa-heart"></i>
                </Link>
                <Link to="/user" id="userButton">
                    <i className="fa-solid fa-user"></i>
                </Link>
            </div>
        </nav>
    )
}