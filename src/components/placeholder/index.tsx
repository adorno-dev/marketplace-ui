import { ReactNode } from 'react'

import './index.scss'

export const Placeholder = ({children}: {children: ReactNode}) => {
    return (
        <div id="placeholder">
            {children}
        </div>
    )
}