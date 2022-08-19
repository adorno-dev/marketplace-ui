import { Navbar, Placeholder } from "../../../components"

export const ForgotPassword = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <div className="title">Forgot your password?</div>
                <p className="hints">We gonna help you to rescue your account.</p>
                <form>
                    <div className="space-between">
                    <p>You'll receive an email including a request token which allow you to redefine your password.</p>
                    </div>
                    <input type="email" name="email" placeholder="Email" autoComplete="off" />
                    <input type="submit" value="SUBMIT REQUEST" />
                </form>
            </div>
        </Placeholder>
    </>
}