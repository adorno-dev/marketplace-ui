import { Navbar, Placeholder, Select, SelectCheckbox } from "../../components"

export const Favorites = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <h3>Favorites</h3>
                <div className="header">
                    <p className="hints">Page not implemented yet.</p>
                </div>
                <Select name="operating-system" caption="Operating System" />
                <p className="hints">Page not implemented yet.</p>
                <SelectCheckbox name="distros" caption="Operating System" />

                <p className="hints">Page not implemented yet.</p>
                <SelectCheckbox name="distros123" caption="Operating System" />
            </div>
        </Placeholder>
    </>
}