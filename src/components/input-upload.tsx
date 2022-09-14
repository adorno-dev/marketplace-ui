import { useEffect, useRef, useState } from "react"

import './input-upload.scss'

export const InputUpload = ({name,placeholder}:{name?:string,placeholder?:string}) => {
    const [text, setText] = useState<string>(placeholder ?? "")
    const input = useRef<HTMLInputElement>(null)
    const clickHandler = () => {
        input.current?.click()
    }
    useEffect(() => {
        input.current?.addEventListener("change", (e: any) => {
            setText(e.target.files?.item(0)?.name)
        })
    }, [input.current?.files])
    return <>
        <div className="input-upload" onClick={clickHandler}>
            <input type="file" name={name} ref={input} />
            <span>{text}</span>
            <i className="fa-solid fa-file"></i>
        </div>
    </>
}