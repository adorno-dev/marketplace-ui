import { useState } from "react"
import { Navbar, Placeholder, Select } from "../../components"

export const CreateProduct = () => {
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
                    <div className="title">Create Product</div>
                    <Select name="categoryId" caption="Empty Category" data={categories} />
                    <input type="hidden" name="storeId" />
                    <input type="text" name="name" placeholder="Name" autoComplete="off" />
                    <input type="text" name="description" placeholder="Description" autoComplete="off" />
                    <div className="space-between">
                        <input type="number" name="price" placeholder="Price" />
                        <input type="number" name="stock" placeholder="Stock" />
                    </div>
                    <input type="submit" value="SAVE" />
                </form>
            </div>
        </Placeholder>
    </>
}