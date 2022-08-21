import { useState } from "react"
import { Navbar, Placeholder, SelectCheckbox } from "../../../components"

export const CreateStore = () => {
    const [categories, _] = useState<{id: any, text: string}[]>([
        {id: 1000, text: "Animations"},
        {id: 1001, text: "Meshes"},
        {id: 1002, text: "Scripts"},
        {id: 1003, text: "HUDs"},
        {id: 1004, text: "Weapons"},
    ])
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <form>
                    <div className="title">Create Store</div>
                    <input type="hidden" name="userId" />
                    <SelectCheckbox name="categories" caption="Categories" data={categories} />
                    <input type="text" name="name" placeholder="Name" autoComplete="off" />
                    <input type="submit" value="SAVE" />
                </form>
            </div>
        </Placeholder>
    </>
}