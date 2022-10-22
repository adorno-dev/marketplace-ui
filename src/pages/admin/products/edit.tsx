import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Authorized, ImageBrowser, ImageViewer, Navbar, Placeholder, Select, SelectItem } from '../../../components'
import { Product } from '../../../models'
import { Category } from '../../../models/category'
import { categoryService, productService } from '../../../services'

export const EditProduct = () => {
    const form = useRef<HTMLFormElement>(null)
    const [categories, setCategories] = useState<SelectItem[]>([])
    const [product, setProduct] = useState<Partial<Product>>()
    const {id} = useParams()
    const navigate = useNavigate()
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        if (form.current) {
            const request = new FormData(form.current)
            const {status} = await productService.updateProduct(request)
            if (status == 200)
                navigate("/admin/products")
        }
    }
    const fetchData = useCallback(()=> {
        if (id) {
            categoryService.getCategories()
                .then(res => setCategories(res.data.map((s: Category) => { return {id: s.id, text: s.name} })))
            productService.getProduct(id)
                .then(res => setProduct(res.data))
        }
    }, [])
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <EditProductStyle ref={form} onSubmit={submitHandler}>
            <h2>Edit Product</h2>
            <p>Complete all required fields to update this product.</p>

            <Select items={categories} name="categoryId" text="Empty Category" value={`${product?.category?.id}`} />
            <input type="hidden" name="storeId" value={product?.store?.id || ''} />
            <input type="hidden" name="id" value={product?.id || ''} />
            <input type="text" name="name" placeholder="Name" value={product?.name || ''} onChange={(e)=>setProduct({...product, name: e.target.value})} />
            <div>
                <input type="text" name="price" placeholder="Price" value={product?.price || ''}  onChange={(e)=>setProduct({...product, price: parseFloat(e.target.value)})} />
                <input type="number" name="stock" placeholder="Stock" value={product?.stock || ''}  onChange={(e)=>setProduct({...product, stock: parseInt(e.target.value)})} />
            </div>
            <textarea name="description" placeholder="Description" value={product?.description || ''} onChange={(e)=>setProduct({...product, description: e.target.value})}></textarea>
            <ImageBrowser name="screenshoots" multiple images={product?.screenshoots} placeholder="Screenshoots" />
            <ImageViewer name="screenshoots" />
            <div>
                <Link to="/admin/products">Back to Products</Link>
                <button type="submit">Confirm</button>
            </div>
        </EditProductStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const EditProductStyle = styled.form`
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