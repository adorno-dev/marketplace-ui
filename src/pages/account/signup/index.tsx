
import { Navbar, Placeholder } from '../../../components'

import './styles.scss'

export const SignUp = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="signUp">
                <div className="title">Sign Up</div>
                <p className="hints">Please fill all required fields to complete your account.</p>
                <form method="post">
                    <input type="username" name="username" placeholder="Username" autoComplete="off" />
                    <input type="email" name="email" placeholder="Email" autoComplete="off" />
                    <input type="password" name="password" placeholder="Password" autoSave="off" />
                    <input type="password" name="confirmPassword" placeholder="Confirm your password" autoSave="off" />
                    <p className="hints">Don't forget to check your email to confirm this account later.</p>
                    <input type="submit" value="SIGN UP" />
                </form>
                <p className="hints">Already have an account? <a href="#">Sign In</a></p>
            </div>
        </Placeholder>
    </>
}