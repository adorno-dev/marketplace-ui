import { Link } from 'react-router-dom'
import { Navbar, Placeholder } from '../../../components'

export const SignUp = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <div className="title">Sign Up</div>
                <p className="hints">Please fill all required fields to complete your account.</p>
                <form>
                    <input type="text" name="username" placeholder="Username" autoComplete="off" />
                    <input type="email" name="email" placeholder="Email" autoComplete="off" />
                    <input type="password" name="password" placeholder="Password" autoSave="off" />
                    <input type="password" name="confirmPassword" placeholder="Confirm your password" autoSave="off" />
                    <p className="hints">Don't forget to check your email to confirm this account later.</p>
                    <input type="submit" value="SIGN UP" />
                    {/* <p className="hints">Already have an account? <Link to="/signin">Sign In</Link></p> */}
                </form>
            </div>
        </Placeholder>
    </>
}