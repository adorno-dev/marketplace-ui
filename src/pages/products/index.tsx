import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Placeholder } from '../../components'
import { Product } from '../../models/product'

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
                <div className="title">Products</div>
                <div className="header">
                    <p className='hints'>We found {products.length} products.</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>
                                <Link className="button" to="/products/new">
                                    <i className="fa-solid fa-file-circle-plus">&nbsp;</i>
                                    <span>New</span>
                                </Link>
                            </th>
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
                                    <Link className="button" to={`/products/edit/${m.id}`}>
                                        <i className="fa-solid fa-file-pen">&nbsp;</i>
                                        <span>Edit</span>
                                    </Link>
                                    <Link className="button" to={`/products/delete/${m.id}`}>
                                        <i className="fa-solid fa-trash-can">&nbsp;</i>
                                        <span>Delete</span>
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Placeholder>
    </>
}