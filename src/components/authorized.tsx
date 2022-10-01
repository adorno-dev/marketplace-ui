import { ReactNode, useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthenticationContext } from "../contexts/authentication-context"

export const Authorized = ({children}: {children: ReactNode}) => {
    const context = useContext(AuthenticationContext)
    return context?.isAuthenticated() ? <>{children}</> : <Navigate to={`/signin?return=${window.location.pathname}`} />
}