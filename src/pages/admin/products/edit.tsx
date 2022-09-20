import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Authorized, ImageBrowser, ImageViewer, Navbar, Placeholder, Select } from '../../../components'

import './edit.scss'

export const EditProduct = () => {
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
        <form id="edit-product">
            <h2>Edit Product</h2>
            <p>Complete all required fields to update this product.</p>
            <Select items={categories} name="category" text="Empty Category" />
            <input type="text" name="name" placeholder="Name" />
            <div>
                <input type="text" name="price" placeholder="Price" />
                <input type="number" name="stock" placeholder="Stock" />
            </div>
            <textarea name="description" placeholder="Description"></textarea>
            <ImageBrowser name="screenshoots" multiple placeholder="Screenshoots" />
            <ImageViewer name="screenshoots" />
            <div>
                <Link to="/admin/products">Back to Products</Link>
                <button>Confirm</button>
            </div>
        </form>
    </Placeholder>
    </Authorized>
    </>
}