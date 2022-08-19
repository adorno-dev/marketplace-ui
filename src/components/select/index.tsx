import { useEffect, useRef } from 'react'
import './index.scss'

export const Select = ({name, caption, data}:{name: string, caption: string, data: {id: any, text: string}[]}) => {
    const root = useRef<HTMLDivElement>(null)
    const list = useRef<HTMLUListElement>(null)
    const label = useRef<HTMLLabelElement>(null)
    const input = useRef<HTMLInputElement>(null)
    useEffect(() => {
        const items = list.current?.querySelectorAll<HTMLLIElement>("li")
        root.current?.addEventListener("click", (e) => {
            e.stopPropagation()

            document.querySelectorAll(".active")
                .forEach(control => {
                    if (!control.contains(root.current))
                        control.classList.remove("active")
                })
            
            window.onclick = function() {
                window.onclick = null;
                root.current?.classList.remove("active")
            }

            root.current?.classList.toggle("active")
        })
        items?.forEach(item => item.addEventListener("click", () => {
            let value = item.getAttribute("value")
            list.current?.querySelectorAll("li.selected")
                .forEach(selected => selected.classList.remove("selected"))
            if (label.current !== null && value !== null && input.current !== undefined) {
                label.current.innerText = item.innerText
                item.className = "selected"
                input.current?.setAttribute("value", value)
            } else if (label.current !== null && value === null) {
                label.current.innerText = caption
                input.current?.removeAttribute("value")
            }
        }))
    }, [])
    return (
        <div ref={root} className="select">
            <input ref={input} type="hidden" name={name} />
            <label ref={label}>{caption}</label>
            <i className="fa-solid fa-angle-down"></i>
            <ul ref={list}>
                <li className='disabled'>{caption}</li>
                {data?.map(m => <li key={m.id} value={m.id}>{m.text}</li>)}
            </ul>
        </div>
    )
}