type Item = {
    id: string,
    text: string
}

type Props = {
    items: Item[],
    name: string,
    text: string,
    value?: string
}

import { useEffect, useRef } from 'react'

import './select.scss'

export const Select = (props: Props) => {
    const component = useRef<HTMLDivElement>(null)
    const setVisible = () => {
        component.current?.addEventListener("click", (e) => {
            e.stopPropagation()
            if (component === null)
                return
            document.querySelectorAll(".active")
                    .forEach(control => {
                        if (!control.contains(component.current))
                             control.classList.remove("active")
                    })
            window.onclick = () => {
                window.onclick = null
                component.current?.classList.remove("active")
            }
            component.current?.classList.toggle("active")
        })
    }
    const setSelected = () => {
        const items = component.current?.querySelectorAll<HTMLLIElement>("ul li")
        const input = component.current?.querySelector<HTMLInputElement>("input")
        const label = component.current?.querySelector<HTMLLabelElement>("label")
        items?.forEach(item => {
            item.addEventListener("click", () => {
                const value = item.getAttribute("value")
                component.current?.querySelectorAll("ul li.selected")
                          .forEach(s => s.classList.remove("selected"))
                if (input !== undefined && input !== null && label !== undefined && label !== null) {
                    if (value !== null) {
                        input.value = value
                        item.className = "selected"
                        label.innerText = item.innerText
                    } else {
                        input.value = ""
                        label.innerText = props.text
                    }
                }
            })
            
            if (label !== undefined && label !== null && props.value === item.value.toString()) {
                item.className = "selected"
                label.innerText = item.innerText
            }
        })
    }
    useEffect(() => {
        setVisible()
        setSelected()
    }, [])
    return <>
    <div className="select" ref={component}>
        <input type="hidden" name={props.name} value={props.value} />
        <label>{props.text}</label>
        <i className="fa-solid fa-angle-down"></i>
        <ul>
            <li className="disabled">{props.text}</li>
            {props.items.map(m => <li key={m.id} value={m.id}>{m.text}</li>)}
        </ul>
    </div>
    </>
}