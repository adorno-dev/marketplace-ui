import { useEffect } from "react"
import { Navbar, Placeholder, Select, SelectCheckbox } from "../../components"

export const Favorites = () => {
    useEffect(() => {
        window.addEventListener("click", (e) => {
            document.querySelectorAll(".active")
                .forEach(component => {
                    component.classList.remove("active")
                })
        })
    }, [])
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <h3>Favorites</h3>
                <div className="header">
                    <p className="hints">Page not implemented yet.</p>
                </div>
                <Select name="operating-system" />
                <p className="hints">Page not implemented yet.</p>
                <SelectCheckbox name="distros" caption="Operating System" />
            </div>
        </Placeholder>
    </>
}