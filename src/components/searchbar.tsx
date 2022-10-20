import { RefObject, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export const Searchbar = ({sender}:{sender?:RefObject<HTMLAnchorElement>}) => {
    const [visible, setVisible] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null)
    const textRef = useRef<HTMLInputElement>(null)
    const cancelRef = useRef<HTMLButtonElement>(null)
    const [text, setText] = useState<string>("")
    const checkVisibility = (e: any) => {
        e.stopPropagation()
        if (textRef.current?.value.length == 0 && !formRef.current?.contains(e.target)) {
            window.removeEventListener("click", checkVisibility)
            cancelHandler(e)
        }
    }
    const toggleVisible = () => {
        visible && textRef.current?.focus()
        sender?.current?.addEventListener("click", (e) => {
            window.addEventListener("click", checkVisibility)
            e.stopPropagation()
            e.preventDefault()
            setVisible(true)
            textRef.current?.focus()
        })
    }
    const textHandler = (e: any) => {
        setText(e.currentTarget.value)
    }
    const cancelHandler = (e: any) => {
        e.preventDefault()
        setVisible(false)
        setText("")
    }
    const searchHandler = (e: any) => {
        e.preventDefault()
    }
    useEffect(() => {
        toggleVisible()
    }, [visible])
    return (
        <SearchBarStyle ref={formRef} className={visible ? "active": ""}>
            <input type="text" ref={textRef} value={text} onChange={textHandler} />
            {
                text.length > 0 &&
                <button id="cancelSearch" ref={cancelRef} onClick={cancelHandler}>
                    <i className="fa-sharp fa-solid fa-xmark"></i>
                </button>
            }
            <button id="confirmSearch" onClick={searchHandler}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </SearchBarStyle>    
    )
}

export const SearchBarStyle = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
        background: transparent;
        color: #686767;
        border: 1px solid #424242;
        border-left: 0;
        font-size: 1.1em;
        padding: 0 12px;
        cursor: pointer;
    }
`