import { RefObject, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import './usermenu.scss'

export const Usermenu = ({sender}:{sender?:RefObject<HTMLAnchorElement>}) => {
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
                    <li><Link to="/">Configure my account</Link></li>
                    <li><Link to="/store">My Store</Link></li>
                    <li><Link to="/signout">Sign Out</Link></li>
                </ul>
            </div>
        </div>
    }
    </>
}