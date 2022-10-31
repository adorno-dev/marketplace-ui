import { RefObject, useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthenticationContext } from '../contexts/authentication-context'

export const Usermenu = ({sender}:{sender?:RefObject<HTMLAnchorElement>}) => {
    const context = useContext(AuthenticationContext)
    const navigate = useNavigate()
    const usermenu = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState<boolean>(false)
    const checkVisibility = (e: any) => {
        e.stopPropagation()
        if (!usermenu.current?.contains(e.target)) {
            window.removeEventListener("mousedown", checkVisibility)
            sender?.current?.classList.remove("active")
            setVisible(false)
        }
    }
    const toggleVisible = () => {
        context?.token && sender?.current?.addEventListener("click", (e: any) => {
            window.addEventListener("mousedown", checkVisibility)
            e.stopPropagation()
            e.preventDefault()
            e.currentTarget.classList.toggle("active")
            setVisible(e.currentTarget.classList.contains("active"))
        })
    }
    const signOut = (e: any) => {
        e.preventDefault();
        context?.signOut();
        navigate("/signin");
    }
    useEffect(() => {
        toggleVisible()
    }, [])
    return <>
    {
        visible &&
        <UserMenuStyle ref={usermenu}>
            <div>
                <h3>{context?.username}</h3>
                <p>{context?.email}</p>
            </div>
            <div>
                <ul>
                    <li><Link to="/store">My store</Link></li>
                    <li><Link to="/signout" onClick={signOut}>Sign Out</Link></li>
                </ul>
            </div>
        </UserMenuStyle>
    }
    </>
}

export const UserMenuStyle = styled.div`
    display: block;
    position: fixed;
    top: 56px;
    right: 10px;
    background: #181a1b;
    border: 1px solid #424242;
    border-top: none;
    z-index: 1;

    div {
        padding: 10px 30px;
    }

    div:first-child {
        border-bottom: 1px solid #424242;
    }
    ul {
        list-style: none;
        li {
            padding: 2px 0;
        }
    }
`