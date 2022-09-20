import { useState } from "react"
import { Link } from "react-router-dom"
import { Authorized, Navbar, Placeholder } from "../../../components"
import { Select } from "../../../components/select"

import './create.scss'

export const CreateCategory = () => {
    const [categories, setCategories] = useState<Array<{id: string, text: string}>>([
        {id: "1", text: "Category #1"},
        {id: "2", text: "Category #2"},
        {id: "3", text: "Category #3"},
        {id: "4", text: "Category #4"},
        {id: "5", text: "Category #5"},
        {id: "6", text: "Category #6"},
        {id: "7", text: "Category #7"},
        {id: "8", text: "Category #8"},
        {id: "9", text: "Category #9"},
        {id: "10", text: "Category #10"},
        {id: "11", text: "Category #11"},
        {id: "12", text: "Category #12"},
        {id: "13", text: "Category #13"},
        {id: "14", text: "Category #14"},
        {id: "15", text: "Category #15"},
        {id: "16", text: "Category #16"},
        {id: "17", text: "Category #17"},
        {id: "18", text: "Category #18"},
        {id: "19", text: "Category #19"},
        {id: "20", text: "Category #20"},
    ])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <form id="create-category">
            <h2>Create Category</h2>
            <p>Complete all required fields to create a category.</p>
            <Select items={categories} name="category" text="Empty Category" />
            <input type="text" name="name" placeholder="Name" />
            <div>
                <Link to="/admin/categories">Back to Categories</Link>
                <button>Confirm</button>
            </div>
        </form>
    </Placeholder>
    </Authorized>
    </>
}