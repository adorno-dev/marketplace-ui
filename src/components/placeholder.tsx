import { ReactNode } from "react"

export const Placeholder = ({children}:{children:ReactNode}) => {
    return (
        <section id="placeholder">{children}</section>
    )
}