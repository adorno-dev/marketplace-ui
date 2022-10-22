import { FormEvent, useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Placeholder } from "../../../components"
import { Select, SelectItem } from "../../../components/select"
import { Category } from "../../../models/category"
import { categoryService } from "../../../services/category-service"

export const CreateCategory = () => {
    const form = useRef<HTMLFormElement>(null)
    const navigate = useNavigate()
    const [categories, setCategories] = useState<SelectItem[]>([])
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        if (form.current) {
            const request = Object.fromEntries(new FormData(form.current).entries())
            const {status} = await categoryService.createCategory(request)
            if (status == 200)
                navigate("/admin/categories")
        }
    }
    useEffect(() => {
        categoryService.getCategories()
        .then(res => setCategories(res.data.map((s: Category) => { return {id: s.id, text: s.name} })))
    }, [])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <CreateCategoryStyle ref={form} onSubmit={submitHandler}>
            <h2>Create Category</h2>
            <p>Complete all required fields to create a category.</p>
            <Select items={categories} name="parentId" text="Empty Category" />
            <input type="text" name="name" placeholder="Name" />
            <div>
                <Link to="/admin/categories">Back to Categories</Link>
                <button type="submit">Confirm</button>
            </div>
        </CreateCategoryStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const CreateCategoryStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 450px;
    margin: 0 auto;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 35px;
        width: 100%;
    }

    > div:last-child {
        justify-content: space-between;
    }
`