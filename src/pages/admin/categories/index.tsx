import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Authorized, Navbar, Pagination, Placeholder } from "../../../components"
import { Paginated } from "../../../contracts/responses/paginated-response"
import { Category } from "../../../models/category"
import { categoryService } from "../../../services/category-service"

import './index.scss'

export const Categories = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState<Paginated<Category>>()
    const createHandler = () => {
        navigate("/admin/categories/new")
    }
    const paginate = (pageIndex: number, pageSize?: number) => {
        categoryService.getCategories({pageIndex})
                       .then(res => setCategories(res.data))
    }
    useEffect(() => {
        categoryService.getCategories({pageIndex: 1})
                       .then(res => setCategories(res.data))
    }, [])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <section id="categories">
            <h2>Categories</h2>
            <p>There are {categories?.totalItems} categories available.</p>
            <div>
                <Link to="/admin">Back to Admin</Link>
                <button onClick={createHandler}>Create</button>
            </div>
            <ul>
                <li>
                    <b>NAME</b>
                    <b className="parent">PARENT</b>
                </li>
            {
                categories?.items.map(m =>
                    <li key={m.id}>
                        <span>{m.name}</span>
                        <span className="parent">{m.parentId && m.parentName}</span>
                        <div>
                            <Link to={{pathname: `/admin/categories/edit/${m.id}`}}>EDIT<i className="fa-solid fa-pen-to-square"></i></Link>
                            <Link to={{pathname: `/admin/categories/delete/${m.id}`}}>DELETE<i className="fa-solid fa-trash"></i></Link>
                        </div>
                    </li>
                )
            }
            </ul>
            <Pagination pageIndex={categories?.pageIndex} pageCount={categories?.pageCount} paginate={paginate} />
        </section>
    </Placeholder>
    </Authorized>
    </>
}