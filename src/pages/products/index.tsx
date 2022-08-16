import { useState } from 'react'
import { Navbar, Placeholder } from '../../components'
import { Product } from '../../models/product'

import '../../styles/page.scss'

export const Products = () => {
    const [products, _] = useState<Array<Product>>([
        { id: "1001", name: "Product #1", description: "Product Description #1", stock: 100, price: 5.79 },
        { id: "1002", name: "Product #2", description: "Product Description #2", stock: 100, price: 5.79 },
        { id: "1003", name: "Product #3", description: "Product Description #3", stock: 100, price: 5.79 },
        { id: "1004", name: "Product #4", description: "Product Description #4", stock: 100, price: 5.79 },
        { id: "1005", name: "Product #5", description: "Product Description #5", stock: 100, price: 5.79 },
    ])
    return <>
        <Navbar />
        <Placeholder>
            <div className='page'>
                <h3>Products</h3>
                <div className="header">
                    <p className='hints'>We found {products.length} products.</p>
                    <a href="#">Create New</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(m => 
                            <tr key={m.id}>
                                <td>{m.name}</td>
                                <td>{m.description}</td>
                                <td>{m.stock}</td>
                                <td>{m.price}</td>
                                <td>
                                    <a href="#edit">Edit</a>
                                    <a href="#delete">Delete</a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Placeholder>
    </>
}