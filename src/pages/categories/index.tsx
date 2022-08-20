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
                    <Link className="button" to="/categories/create">
                        <i className="fa-solid fa-file-circle-plus">&nbsp;</i>
                        <span>New</span>
                    </Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(m => 
                            <tr key={m.id}>
                                <td>{m.name}</td>
                                <td>
                                    <a href="#edit" className='button'>
                                        <i className="fa-solid fa-file-pen">&nbsp;</i>
                                        <span>Edit</span>
                                    </a>
                                    <a href="#delete" className='button'>
                                        <i className="fa-solid fa-trash-can">&nbsp;</i>
                                        <span>Delete</span>
                                    </a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Placeholder>
        </>
}