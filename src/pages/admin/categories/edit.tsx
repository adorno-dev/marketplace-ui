import { FormEvent, useEffect, useMemo, useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Authorized, Navbar, Placeholder } from "../../../components"
import { Select, SelectItem } from "../../../components/select"
import { Category } from "../../../models/category"
import { categoryService } from "../../../services/category-service"

import './edit.scss'

export const EditCategory = () => {
    const form = useRef<HTMLFormElement>(null)
    const [categories, setCategories] = useState<SelectItem[]>([])
    const [category, setCategory] = useState<Category>()
    const navigate = useNavigate()
    const {id} = useParams()
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()        
        if (form.current) {
            const request = Object.fromEntries(new FormData(form.current).entries())
            const {status} = await categoryService.updateCategory(request)
            if (status == 200)
                navigate("/admin/categories")
        }
    }
    useEffect(() => {
        if (id) {
            categoryService.getCategories()
                .then(res => setCategories(res.data.map((s: Category) => { return {id: s.id, text: s.name} })))
            categoryService.getCategory(parseInt(id))
                .then(res => setCategory(res.data))
        }
    }, [])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <form ref={form} id="edit-category" onSubmit={submitHandler}>
            <h2>Edit Category</h2>
            <p>Complete all required fields to update this category.</p>
            <Select items={categories} name="parentId" text="Empty Category" value={`${category?.parentId}`} />
            <input type="hidden" name="id" value={id} />
            <input type="text" name="name" placeholder="Name" value={`${category?.name}`} onChange={()=>{}}  />
            <div>
                <Link to="/admin/categories">Back to Categories</Link>
                <button type="submit">Confirm</button>
            </div>
        </form>
    </Placeholder>
    </Authorized>
    </>
}