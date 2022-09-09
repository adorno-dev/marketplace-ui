import { RefObject, useEffect, useRef, useState } from 'react'
import './searchbar.scss'

export const Searchbar = ({sender}:{sender?:RefObject<HTMLAnchorElement>}) => {
    const formRef = useRef<HTMLFormElement>(null)
    const textRef = useRef<HTMLInputElement>(null)
    const cancelRef = useRef<HTMLButtonElement>(null)
    const [text, setText] = useState<string>("")
    const toggleVisible = () => {
        sender?.current?.addEventListener("click", (e) => {
            e.preventDefault()
            e.stopPropagation()
            formRef.current?.classList.add("active")
            textRef.current?.focus()
            window.onclick = (e: any) => {
                
                if (textRef.current?.value.length == 0 && e.target !== textRef.current && !e.target.contains(formRef.current)) {
                    console.log(e.target);
                    window.onclick = null;
                    cancelHandler(e)
                }
            }
        })
    }
    const cancelHandler = (e: any) => {
        e.preventDefault()
        formRef?.current?.classList.remove("active")
        textRef.current?.focus()
        setText("")
    }
    const searchHandler = (e: any) => {
        e.preventDefault()
        console.log(text)
    }
    useEffect(() => {
        toggleVisible()
    }, [sender?.current?.classList])
    return (
        <form id="searchbar" ref={formRef}>
            <input type="text" ref={textRef} autoFocus value={text} onChange={(e)=>setText(e.currentTarget.value)} />
            {
                text.length > 0 &&
                <button id="cancelSearch" ref={cancelRef} onClick={cancelHandler}>
                    <i className="fa-sharp fa-solid fa-xmark"></i>
                </button>
            }
            <button id="confirmSearch" onClick={searchHandler}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>    
    )
}