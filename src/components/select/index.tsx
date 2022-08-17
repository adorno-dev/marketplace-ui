import { useEffect, useRef } from 'react'
import './index.scss'

export const Select = ({name}:{name: string}) => {
    const select = useRef<HTMLDivElement>(null)
    const list = useRef<HTMLUListElement>(null)
    const label = useRef<HTMLLabelElement>(null)
    const input = useRef<HTMLInputElement>(null)
    useEffect(() => {
        const items = list.current?.querySelectorAll<HTMLLIElement>("li")
        select.current?.addEventListener("click", () => 
            select.current?.classList.toggle("active"))
        items?.forEach(item => item.addEventListener("click", () => {
            let value = item.getAttribute("value")
            list.current?.querySelectorAll("li.selected")
                .forEach(selected => selected.classList.remove("selected"))
            if (label.current !== null && value !== null && input.current !== undefined) {
                label.current.innerText = item.innerText
                item.className = "selected"
                input.current?.setAttribute("value", value)
            }
        }))
    }, [])
    return (
        <div ref={select} className="select">
            <input ref={input} type="hidden" name={name} />
            <label ref={label}>Operating System</label>
            <ul ref={list}>
                <li value="windows-11">Windows 11</li>
                <li value="windows-10">Windows 10</li>
                <li value="windows-81">Windows 8.1</li>
                <li value="windows-7">Windows 7</li>
                <li value="freebsd">FreeBSD</li>
                <li value="linux">Linux</li>
                <li value="darwin">MacOS</li>
            </ul>
        </div>
    )
}