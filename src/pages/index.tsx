import { Navbar } from '../components/navbar'
import { Placeholder } from '../components/placeholder'

import './index.scss'

export const Index = () => {
    return (
        <div>
            <Navbar />
            <Placeholder>
                <div style={{height: 800}}></div>
            </Placeholder>
        </div>
    )
}