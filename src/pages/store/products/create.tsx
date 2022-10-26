import { FormEvent, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Authorized, ImageBrowser, ImageViewer, Navbar, Placeholder, Select, SelectItem } from '../../../components'
import { Category } from '../../../models/category'
import { categoryService, productService } from '../../../services'

export const CreateProduct = () => {
    const form = useRef<HTMLFormElement>(null)
    const {id} = useParams()
    const [categories, setCategories] = useState<SelectItem[]>([])
    const navigate = useNavigate()
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        if (form.current) {
            const request = new FormData(form.current)
            const {status} = await productService.createProduct(request)
            if (status == 200)
                navigate(`/store/${id}/products`)
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
        <CreateProductStyle ref={form} method="POST" onSubmit={submitHandler}>
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
                <Link to={`/store/${id}/products`}>Back to Products</Link>
                <button type="submit">Confirm</button>
            </div>
        </CreateProductStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const CreateProductStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 450px;
    margin: 0 auto;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 35px;
        width: 100%;

        & input:first-child {
            margin-right: 5px;
        }
        & input:last-child {
            margin-left: 5px;
        }
    }

    > div:last-child {
        justify-content: space-between;
    }
`