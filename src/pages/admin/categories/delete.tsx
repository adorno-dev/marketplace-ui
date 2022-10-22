import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Placeholder } from "../../../components"
import { Category } from "../../../models/category"
import { categoryService } from "../../../services/category-service"

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
        <DeleteCategoryStyle>
            <h2>Delete Category</h2>
            <p>Are you sure want delete the category below?</p>
            <div>
                {
                    category?.parentId &&
                    <>
                    <span>Parent</span>
                    <span>{category?.parentName}</span>
                    </>                    
                }
                <span>Name</span>
                <span>{category?.name}</span>
            </div>
            <span>
                <Link to="/admin/categories">Back to Categories</Link>
                <button onClick={deleteCategory}>Confirm</button>
            </span>
        </DeleteCategoryStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const DeleteCategoryStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    min-width: 360px;

    div {
        display: grid;
        grid-template-columns: repeat(2, auto);
        margin: 25px 0;
        min-width: 360px;
        max-width: 880px;

        > :nth-child(odd) {
            text-align: right;
            margin-right: 10px;
            color: gray;
            font-weight: bold;
        }
    }

    > span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 360px;
    }
`