import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Authorized, Navbar, Placeholder } from "../../../components"
import { Category } from "../../../models/category"
import { categoryService } from "../../../services/category-service"

import './delete.scss'

export const DeleteCategory = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [category, setCategory] = useState<Category>()
    useEffect(() => {
        id &&
        categoryService.getCategory(parseInt(id))
            .then(res => setCategory(res.data))
    }, [])
    const deleteCategory = () => {
        id && 
        categoryService.deleteCategory(parseInt(id))
        navigate("/admin/categories")
    }
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <div id="delete-category">
            <h2>Delete Category</h2>
            <p>Are you sure want delete the category below?</p>
            <div>
                {
                    category?.parentId &&
                    <>
                    <span>Parent</span>
                    <span>{category?.parent?.name}</span>
                    </>                    
                }
                <span>Name</span>
                <span>{category?.name}</span>
            </div>
            <span>
                <Link to="/admin/categories">Back to Categories</Link>
                <button onClick={deleteCategory}>Confirm</button>
            </span>
        </div>
    </Placeholder>
    </Authorized>
    </>
}