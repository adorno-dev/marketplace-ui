import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { ForgotPasswordRequest } from "../contracts/requests/forgot-password-request";
import { SignInRequest } from "../contracts/requests/signin-request";
import { SignUpRequest } from "../contracts/requests/signup-request";
import { AuthenticationService } from "../services/authentication-service";

export type Authentication = {
    username?: string,
    email?: string,
    token?: string,
    forgotPassword: (request: ForgotPasswordRequest) => Promise<boolean>,
    signIn: (request: SignInRequest) => Promise<unknown>,
    signUp: (request: SignUpRequest) => Promise<boolean>,
    signOut: () => Promise<unknown>,
    isAuthenticated: () => boolean
}

export const AuthenticationContext = createContext<Authentication | null>(null)

export const AuthenticationProvider = ({children}: {children: ReactNode}) => {
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [token, setToken] = useState<string>("")
    const service = AuthenticationService
    const signIn = async (request: SignInRequest) => {
        const result = await service.signIn(request)
        if (result.status === 200) {
            setUsername(result.data.userName)
            setEmail(result.data.email)
            setToken(result.data.token)
            localStorage.setItem("u", result.data.userName)
            localStorage.setItem("e", result.data.email)
            localStorage.setItem("t", result.data.token)
        }
    }
    const signUp = async (request: SignUpRequest) => {
        const result = await service.signUp(request)
        return result.status === 200
    }
    const signOut = async () => {
        setUsername("")
        setEmail("")
        setToken("")
        localStorage.removeItem("u")
        localStorage.removeItem("e")
        localStorage.removeItem("t")
    }
    const forgotPassword = async (request: ForgotPasswordRequest) => {
        const result = await service.forgotPassword(request)
        return result.status === 200
    }
    const isAuthenticated = () => token !== ""
    useEffect(() => {
        setUsername(localStorage.getItem("u") ?? "")
        setEmail(localStorage.getItem("e") ?? "")
        setToken(localStorage.getItem("t") ?? "")
    }, [token])

    return (
        <AuthenticationContext.Provider value={{username, email, token, signIn, signUp, signOut, forgotPassword, isAuthenticated}}>
            <>{children}</>
        </AuthenticationContext.Provider>
    )
}