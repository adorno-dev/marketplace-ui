import { ReactNode } from "react"
import styled from "styled-components"

export const Placeholder = ({children}:{children:ReactNode}) => {
    return (
        <PlaceholderStyle>
            {children}
        </PlaceholderStyle>
    )
}

export const PlaceholderStyle = styled.section`
    padding: 15px 20px;
`