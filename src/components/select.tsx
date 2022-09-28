export type SelectItem = {
    id: string,
    text: string
}

type Props = {
    items: SelectItem[],
    name: string,
    text: string,
    value?: string
}

import { useEffect, useRef, useState } from 'react'

import './select.scss'

export const Select = (props: Props) => {
    const component = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<boolean>()
    const [text, setText] = useState<string>()
    const [value, setValue] = useState<string>()
    useEffect(()=>{
        component.current?.addEventListener("click", (e: any) => {
            e.stopPropagation();
            setActive(toggle => ! toggle)
            if (e.target.value !== undefined) {
                setText(e.target.innerText)
                setValue(e.target.value)
            }
        })
    }, [])
    return <>
    <div ref={component} className={`select ${active ? "active": ""}`}>
        <input type="hidden" name={props.name} value={`${value || props.value}`} />
        <label>{text || props.items.find(p => p.id == (value || props.value))?.text || props.text}</label>
        <i className="fa-solid fa-angle-down"></i>
        <ul>
            <li key={0} className="disabled" value="0">{props.text}</li>
            {props.items.map(m => <li key={m.id} value={m.id} className={m.id == value ? "selected": ""}>{m.text}</li>)}
        </ul>
    </div>
    </>
}