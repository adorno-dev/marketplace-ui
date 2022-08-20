import { Checkbox, Navbar, Placeholder, Radio } from '../components'

export * from './categories'
export * from './products'
export * from './account/signin'

export const Index = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <div className="title">Marketplace</div>
                <div className="header">
                    <p className="hints">Welcome to the marketplace.</p>
                </div>
                {/* <div>
                    <Checkbox name="remember" text="Remember" />
                    <p className="hints">Are you more than 18 years old?</p>
                    <Radio name="old" value='yes' text='Yes' />
                    <Radio name="old" value='no' text='No' />
                </div> */}
            </div>
        </Placeholder>
    </>
}