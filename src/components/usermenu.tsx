import { RefObject, useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../contexts/authentication-context'

import './usermenu.scss'

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
        sender?.current?.addEventListener("click", (e: any) => {
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
        <div id="usermenu" ref={usermenu}>
            <div>
                <h3>Developer</h3>
                <p>developer@marketplace.com</p>
            </div>
            <div>
                <ul>
                    <li><Link to="/account">My account</Link></li>
                    <li><Link to="/favorites">My favorites</Link></li>
                    <li><Link to="/store">My store</Link></li>
                    <li><Link to="/signout" onClick={signOut}>Sign Out</Link></li>
                </ul>
            </div>
        </div>
    }
    </>
}