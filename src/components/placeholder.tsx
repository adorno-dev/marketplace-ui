import { ReactNode } from "react"

import './placeholder.scss'

export const Placeholder = ({children}:{children:ReactNode}) => {
    return (
        <section id="placeholder">{children}</section>
    )
}