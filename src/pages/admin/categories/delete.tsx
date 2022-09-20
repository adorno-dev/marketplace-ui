import { Link, useParams } from "react-router-dom"
import { Authorized, Navbar, Placeholder } from "../../../components"

import './delete.scss'

export const DeleteCategory = () => {
    const {id} = useParams()
    const category = {id, parent: "Parent Category #1", name: "Category #1"}
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <div id="delete-category">
            <h2>Delete Category</h2>
            <p>Are you sure want delete the category below?</p>
            <div>
                <span>Parent</span>
                <span>{category.parent}</span>
                <span>Name</span>
                <span>{category.name}</span>
            </div>
            <span>
                <Link to="/admin/categories">Back to Categories</Link>
                <button>Confirm</button>
            </span>
        </div>
    </Placeholder>
    </Authorized>
    </>
}