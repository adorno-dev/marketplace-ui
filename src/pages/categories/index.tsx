import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Placeholder } from '../../components'
import { Category } from '../../models'

export const Categories = () => {
    const [categories, _] = useState<Array<Category>>([
        { id: 1001, name: "Category #1" },
        { id: 1002, name: "Category #2" },
        { id: 1003, name: "Category #3" },
        { id: 1004, name: "Category #4" },
        { id: 1005, name: "Category #5" },
    ])
    return <>
        <Navbar />
        <Placeholder>
            <div className='page'>
                <div className="title">Categories</div>
                <div className="header">
                    <p className='hints'>We found {categories.length} categories.</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>
                                <Link className="button" to="/categories/new">
                                    <i className="fa-solid fa-file-circle-plus">&nbsp;</i>
                                    <span>New</span>
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(m => 
                            <tr key={m.id}>
                                <td>{m.name}</td>
                                <td>
                                    <Link className="button" to={`/categories/edit/${m.id}`}>
                                        <i className="fa-solid fa-file-pen">&nbsp;</i>
                                        <span>Edit</span>
                                    </Link>
                                    <Link className="button" to={`/categories/delete/${m.id}`}>
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