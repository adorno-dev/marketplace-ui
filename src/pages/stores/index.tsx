import { useState } from 'react'
import { Navbar, Placeholder } from '../../components'
import { Store } from '../../models/store'

import '../../styles/page.scss'

export const Stores = () => {
    const [stores, _] = useState<Array<Store>>([
        { id: "1001", name: "Store #1", user: { id: "2000", username: "Developer", email: "developer@email.com" } },
        { id: "1002", name: "Store #2", user: { id: "2000", username: "Developer", email: "developer@email.com" } },
        { id: "1003", name: "Store #3", user: { id: "2000", username: "Developer", email: "developer@email.com" } },
        { id: "1004", name: "Store #4", user: { id: "2000", username: "Developer", email: "developer@email.com" } },
        { id: "1005", name: "Store #5", user: { id: "2000", username: "Developer", email: "developer@email.com" } },
    ])
    return <>
        <Navbar />
        <Placeholder>
            <div className='page'>
                <h3>Stores</h3>
                <div className="header">
                    <p className='hints'>We found {stores.length} stores.</p>
                    <a href="#">Create New</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Owner</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {stores.map(m => 
                            <tr key={m.id}>
                                <td>{m.name}</td>
                                <td>{m.user?.username}</td>
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