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
            root.current?.classList.toggle("active")

            // window.onclick = () => {
            //     window.onclick = null
            //     document.querySelectorAll(".active")
            //         .forEach(o => o.classList.remove("active"))
            // }
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
            <ul ref={list}>
                <li>
                    <label htmlFor="debian">Debian</label>
                    <input type="checkbox" readOnly id="debian" name={name} value="debian" />
                </li>
                <li>
                    <label htmlFor="arch">Arch</label>
                    <input type="checkbox" readOnly id="arch" name={name} value="arch" />
                </li>
                <li>
                    <label htmlFor="redhat">Red Hat</label>
                    <input type="checkbox" readOnly id="redhat" name={name} value="redhat" />
                </li>
                <li>
                    <label htmlFor="slackware">Slackware</label>
                    <input type="checkbox" readOnly id="slackware" name={name} value="slackware" />
                </li>
            </ul>
        </div>
    )
}