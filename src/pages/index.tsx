import { Checkbox, Navbar, Placeholder, Radio, Select, SelectChecker } from '../components'

export * from './categories'
export * from './products'
export * from './stores'
export * from './favorites'
export * from './account/signin'

export const Index = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <h3>Main Page</h3>
                <div className="header">
                    <p className="hints">Welcome to the marketplace.</p>
                </div>
                <div>
                    <Checkbox />
                    <p className="hints">Are you more than 18 years old?</p>
                    <Radio />
                    <p className="hints">Book format?</p>
                    <Select />
                    <p className="hints">Choose available colors</p>
                    <SelectChecker />
                </div>
            </div>
        </Placeholder>
    </>
}