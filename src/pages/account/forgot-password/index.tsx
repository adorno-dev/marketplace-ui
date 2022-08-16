import { Navbar, Placeholder } from "../../../components"

import './styles.scss'

export const ForgotPassword = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="forgotPassword">
                <div className="title">Forgot your password?</div>
                <p className="hints">We gonna help you rescue your account.</p>
                <form method="post">
                    <div className="options">
                        <p>You'll receive an email including a request token which allow you to redefine your password.</p>
                    </div>
                    <input type="email" name="email" placeholder="Email" autoComplete="off" />
                    <input type="submit" value="SUBMIT REQUEST" />
                </form>
            </div>
        </Placeholder>
    </>
}