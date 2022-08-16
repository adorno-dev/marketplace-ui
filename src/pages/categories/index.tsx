import { useState } from 'react'
import { Navbar, Placeholder } from '../../components'
import { Category } from '../../models/category'

import '../../styles/page.scss'

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
                <h3>Categories</h3>
                <div className="header">
                    <p className='hints'>We found {categories.length} categories.</p>
                    <a href="#">Create New</a>
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