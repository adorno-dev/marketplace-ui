import { useEffect, useRef } from 'react'

import './index.scss'

export const SelectCheckbox = ({name, caption, data}:{name: string, caption: string, data: {id: any, text: string}[]}) => {
    const root = useRef<HTMLDivElement>(null)
    const list = useRef<HTMLUListElement>(null)
    const label = useRef<HTMLLabelElement>(null)
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
        items?.forEach(item => item.addEventListener("click", (e) => {
            let values = list.current?.querySelectorAll("input[type=checkbox]:checked")
            if (label.current !== null && values !== undefined) {
                label.current.innerText = values.length > 0 ?
                    `${caption} (${values.length})`:
                    `${caption}`
            }
        }))
    }, [])
    return (
        <div ref={root} className="select-checkbox">
            <label ref={label}>{caption}</label>
            <i className="fa-solid fa-angle-down"></i>
            <ul ref={list}>
                {data.map(m =>
                    <li key={m.id}>
                        <input type="checkbox" readOnly id={`${name}-${m.id}`} name={name} value={`${m.id}`} />
                        <label htmlFor={`${name}-${m.id}`}>{m.text}</label>
                    </li>
                )}
            </ul>
        </div>
    )
}