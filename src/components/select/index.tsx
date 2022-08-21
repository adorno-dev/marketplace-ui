import { useEffect, useRef, useState } from 'react'
import './index.scss'

export const Select = ({name, caption, data, value}:{name: string, caption: string, value?: any, data: {id: any, text: string}[]}) => {
    const root = useRef<HTMLDivElement>(null)
    const list = useRef<HTMLUListElement>(null)
    const label = useRef<HTMLLabelElement>(null)
    const input = useRef<HTMLInputElement>(null)
    const [_, setItemValue] = useState<any>(value)
    useEffect(() => {
        const items = list.current?.querySelectorAll<HTMLLIElement>("li")
        root.current?.addEventListener("click", (e) => {
            e.stopPropagation()

            if (root.current === null)
                return

            document.querySelectorAll(".active")
                .forEach(control => {
                    if (!control.contains(root.current))
                        control.classList.remove("active")
                })
            
            window.onclick = function() {
                window.onclick = null;
                root.current?.classList.remove("active")
            }

            root.current.classList.toggle("active")
        })

        items?.forEach(item => {
            item.addEventListener("click", () => {
                let currentItemValue = item.getAttribute("value")
                list.current?.querySelectorAll("li.selected")
                             .forEach(selected => selected.classList.remove("selected"))

                if (label.current === null || input.current === undefined)
                    return
                
                if (currentItemValue !== null) {
                    label.current.innerText = item.innerText
                    item.className = "selected"
                    setItemValue(currentItemValue)
                } else {
                    label.current.innerText = caption
                    setItemValue("")
                }
            })
        })
    }, [])
    return (
        <div ref={root} className="select">
            <input ref={input} type="hidden" name={name} value={value} />
            <label ref={label}>{ data.find(s => s.id == value)?.text ?? caption }</label>
            <i className="fa-solid fa-angle-down"></i>
            <ul ref={list}>
                <li className='disabled'>{caption}</li>
                {data?.map(m => <li key={m.id} className={ m.id == value ? "selected": "" } value={m.id}>{m.text}</li>)}
            </ul>
        </div>
    )
}