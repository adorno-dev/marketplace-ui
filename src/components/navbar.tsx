import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Searchbar } from './searchbar'
import { Usermenu } from './usermenu'

import styled from 'styled-components'

export const Navbar = () => {
    const searchbar = useRef<HTMLAnchorElement>(null)
    const usermenu = useRef<HTMLAnchorElement>(null)
    return <>
        <NavbarStyle>
            <div>
                <Link to="/" id="menuButton">
                    <i className="fa-solid fa-bars"></i>
                </Link>
                <Link to="/admin" id="adminButton">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                </Link>
                <Link to="/store" id="storeButton">
                    <i className="fa-solid fa-store"></i>
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
        </NavbarStyle>
        <Usermenu sender={usermenu} />
    </>
}

export const NavbarStyle = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    border-bottom: 1px solid #424242;
    background: #181a1b;

    position: fixed;
    overflow: hidden;
    top: 0;
    width: 100%;

    @media only screen and (max-width: 705px) {
        & > div:nth-child(1) {
            width: 40%;
        }
        & > div:nth-child(2) {
            width: 0;

            #searchbar {
                display: none;
            }

            #searchbar.active {
                display: flex !important;
                position: absolute;
                top: 10px;
                left: 50px;
                right: 50px;
                padding: 0 15px;
                background: #181a1b;
                z-index: 1;
                justify-content: center;
                background: #181a1b;
            }
        }
        & > div:nth-child(3) {
            width: 60%;
        }
    }

    @media only screen and (min-width: 705px) {
        & > div:nth-child(1) {
            width: 25%;
        }
        & > div:nth-child(2) {
            width: 50%;
        }
        & > div:nth-child(3) {
            width: 25%;
        }
        a#searchButton {
            display: none;
        }
    }
    
    div:nth-child(3) {
        text-align: right;
    }  

    a {
        color: #737373;
        display: inline-block;
        font-size: 1.25em;
        margin: 0 20px;
    }
`