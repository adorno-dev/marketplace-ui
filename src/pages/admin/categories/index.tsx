import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Pagination, Placeholder } from "../../../components"
import { Paginated } from "../../../contracts/responses/paginated-response"
import { Category } from "../../../models/category"
import { categoryService } from "../../../services/category-service"

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
        <CategoriesStyle>
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
        </CategoriesStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const CategoriesStyle = styled.section`
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0 0;
    }
    ul {
        list-style: none;
        li {
            display: grid;

            @media only screen and (min-width: 900px) {
                grid-template-columns: minmax(115px, 795px) minmax(115px, 795px) 150px;
                .parent {
                    display: unset;
                }
            }

            @media only screen and (max-width: 900px) {
                grid-template-columns: auto 140px;
                .parent {
                    display: none;
                }
            }

            align-items: center;
            padding: 5px 0;
            border-bottom: 1px solid #424242;
            > span {
                font-size: 1em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            > div {
                text-align: right;
                font-size: .95em;
                font-weight: bold;
                i {padding-left: 5px;}
                a {margin-right: 10px;}
            }

            &:hover {
                color: rgb(160, 160, 160)
            }
        }
    }
`