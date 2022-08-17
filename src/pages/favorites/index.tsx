import { Navbar, Placeholder, Select } from "../../components"

export const Favorites = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <h3>Favorites</h3>
                <div className="header">
                    <p className="hints">Page not implemented yet.</p>
                </div>
                <Select name="operating-system" />
                <Select name="os" />
            </div>
        </Placeholder>
    </>
}