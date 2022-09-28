import { FormEvent, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Authorized, ImageBrowser, ImageViewer, Navbar, Placeholder, Select, SelectItem } from '../../../components'
import { Category } from '../../../models/category'
import { categoryService, productService } from '../../../services'

import './create.scss'

export const CreateProduct = () => {
    const form = useRef<HTMLFormElement>(null)
    const [categories, setCategories] = useState<SelectItem[]>([])
    const navigate = useNavigate()
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        if (form.current) {
            const request = new FormData(form.current)
            const {status} = await productService.createProduct(request)
            if (status == 200)
                navigate("/admin/products")
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
        <form ref={form} method="POST" id="create-product" onSubmit={submitHandler}>
            <h2>Create Product</h2>
            <p>Complete all required fields to create a product.</p>
            <Select items={categories} name="categoryId" text="Empty Category" value="0" />
            <input type="text" name="name" placeholder="Name" />
            <div>
                <input type="text" name="price" placeholder="Price" />
                <input type="number" name="stock" placeholder="Stock" />
            </div>
            <textarea name="description" placeholder="Description"></textarea>
            <ImageBrowser name="screenshoots" multiple placeholder='Screenshoots' />
            <ImageViewer name="screenshoots" />
            <div>
                <Link to="/admin/products">Back to Products</Link>
                <button type="submit">Confirm</button>
            </div>
        </form>
    </Placeholder>
    </Authorized>
    </>
}