import { useEffect, useRef } from 'react'

import './index.scss'

export const SelectCheckbox = ({name, caption}:{name: string, caption: string}) => {
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
            <label ref={label}>Operating System</label>
            <i className="fa-solid fa-angle-down"></i>
            <ul ref={list}>
                <li>
                    <input type="checkbox" readOnly id={`${name}-debian`} name={name} value="debian" />
                    <label htmlFor={`${name}-debian`}>Debian</label>
                </li>
                <li>
                    <input type="checkbox" readOnly id={`${name}-arch`} name={name} value="arch" />
                    <label htmlFor={`${name}-arch`}>Arch</label>
                </li>
                <li>
                    <input type="checkbox" readOnly id={`${name}-redhat`} name={name} value="redhat" />
                    <label htmlFor={`${name}-redhat`}>Red Hat</label>
                </li>
                <li>
                    <input type="checkbox" readOnly id={`${name}-slackware`} name={name} value="slackware" />
                    <label htmlFor={`${name}-slackware`}>Slackware</label>
                </li>

            </ul>
        </div>
    )
}