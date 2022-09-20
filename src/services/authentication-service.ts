import axios, { AxiosError } from "axios";
import { ForgotPasswordRequest } from "../contracts/requests/forgot-password-request";
import { SignInRequest } from "../contracts/requests/signin-request";
import { SignUpRequest } from "../contracts/requests/signup-request";
import { ApiResponse } from "../types/api-response-type";

export const api = axios.create({
    baseURL: "https://localhost:5000/api/"
})

const forgotPassword = async (request: ForgotPasswordRequest) => {
    try {
        return await api.post("authentication/forgot-password", request) as ApiResponse
    } catch (error) {
        return (error as AxiosError).response as ApiResponse
    }
}

const signIn = async (request: SignInRequest) => {
    try {
        return await api.post("authentication/signin", request) as ApiResponse
    } catch (error) {
        return (error as AxiosError).response as ApiResponse
    }
}

const signUp = async (request: SignUpRequest) => {
    try {
        return await api.post("authentication/signup", request) as ApiResponse
    } catch (error) {
        return (error as AxiosError).response as ApiResponse
    }
}

export const AuthenticationService = {
    forgotPassword,
    signIn,
    signUp
}