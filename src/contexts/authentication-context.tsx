import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { ForgotPasswordRequest } from "../contracts/requests/forgot-password-request";
import { SignInRequest } from "../contracts/requests/signin-request";
import { SignUpRequest } from "../contracts/requests/signup-request";
import { AuthenticationService } from "../services/authentication-service";

export type Authentication = {
    token?: string,
    forgotPassword: (request: ForgotPasswordRequest) => Promise<boolean>,
    signIn: (request: SignInRequest) => Promise<unknown>,
    signUp: (request: SignUpRequest) => Promise<boolean>,
    signOut: () => Promise<unknown>,
    isAuthenticated: () => boolean
}

export const AuthenticationContext = createContext<Authentication | null>(null)

export const AuthenticationProvider = ({children}: {children: ReactNode}) => {
    const [token, setToken] = useState<string>("")
    const service = AuthenticationService
    const signIn = async (request: SignInRequest) => {
        const result = await service.signIn(request)
        if (result.status === 200) {
            setToken(result.data.token)
            localStorage.setItem("t", result.data.token)
        }
    }
    const signUp = async (request: SignUpRequest) => {
        const result = await service.signUp(request)
        return result.status === 200
    }
    const signOut = async () => {
        setToken("")
        localStorage.removeItem("t")
    }
    const forgotPassword = async (request: ForgotPasswordRequest) => {
        const result = await service.forgotPassword(request)
        return result.status === 200
    }
    const isAuthenticated = () => token !== ""
    useEffect(() => {
        const storedToken = localStorage.getItem("t")
        if (storedToken)
            setToken(storedToken)
        else signOut()
    }, [token])

    return (
        <AuthenticationContext.Provider value={{token, signIn, signUp, signOut, forgotPassword, isAuthenticated}}>
            {children}
        </AuthenticationContext.Provider>
    )
}