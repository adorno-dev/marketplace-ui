import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar, Pagination, Placeholder } from "../../../components"
import { Category } from "../../../models/category"

import './index.scss'

export const Categories = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState<Category[]>([
        {id: 1000, name: "Category #1"},
        {id: 1001, name: "Category #2"},
        {id: 1002, name: "Category #3"},
        {id: 1003, name: "Category #4", parentId: 1000},
        {id: 1004, name: "Category #5", parentId: 1000},
        {id: 1005, name: "Category #6"},
        {id: 1006, name: "Category #7"},
        {id: 1007, name: "Category #8"}
    ])
    const createHandler = () => {
        navigate("/admin/categories/new")
    }
    return <>
    <Navbar />
    <Placeholder>
        <section id="categories">
            <h2>Categories</h2>
            <p>There are {categories.length} categories available.</p>
            <div>
                <button onClick={createHandler}>Create</button>
            </div>
            <ul>
                <li>
                    <b>NAME</b>
                    <b className="parent">PARENT</b>
                </li>
            {
                categories.map(m =>
                    <li key={m.id}>
                        <span>{m.name}</span>
                        <span className="parent">
                            {
                                m.parentId && categories.find(p => p.id === m.parentId)?.name
                            }
                        </span>
                        <div>
                            <Link to="/">EDIT<i className="fa-solid fa-pen-to-square"></i></Link>
                            <Link to="/">DELETE<i className="fa-solid fa-trash"></i></Link>
                        </div>
                    </li>
                )
            }
            </ul>
            <Pagination />
        </section>
    </Placeholder>
    </>
}