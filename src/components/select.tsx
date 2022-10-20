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
import styled from 'styled-components'

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
    <SelectStyle ref={component} className={active ? "active": ""}>
        <input type="hidden" name={props.name} value={`${value || props.value}`} />
        <label>{text || props.items.find(p => p.id == (value || props.value))?.text || props.text}</label>
        <i className="fa-solid fa-angle-down"></i>
        <ul>
            <li key={0} className="disabled" value="0">{props.text}</li>
            {props.items.map(m => <li key={m.id} value={m.id} className={m.id == value ? "selected": ""}>{m.text}</li>)}
        </ul>
    </SelectStyle>
    </>
}

export const SelectStyle = styled.div`
    background: #181a1b;
    color: #688189;
    border: 1px solid #424242;
    font-size: .85em;
    position: relative;

    i {
        margin: 0 15px;
        transform: rotate(90deg);
        transition: 0.1s;
    }

    label {
        padding: 0 15px;
        color: lightblue;
        user-select: none;
    }

    ul {
        display: flex;
        flex-direction: column;
        background: #181a1b;
        position: absolute;
        top: calc(35px - 1px);

        left: -.5px;
        width: calc(100% - .5px);
        
        @media only screen and (max-width: 400px) {
            width: calc(100%);
        }

        box-sizing: content-box;
        border: 1px solid #424242;
        border-top: none;
        list-style: none;

        border: 1px solid rgb(173, 216, 230);
        border-top: none;

        max-height: 318px;
        overflow-y: auto;

        li {
            padding: 0 15px;
            line-height: 35px;
            user-select: none;
            &:hover {
                background: rgba(255, 255, 255, 0.05) !important;
                color: lightblue;
            }
            &.disabled {
                color: gray;
            }
            &.selected {
                background: rgba(255, 255, 255, 0.09);
            }
        }
    }

    &.active {
        border: 1px solid rgb(173, 216, 230);
        border-bottom: none;
        i { transform: rotate(0); }
    }
    
    &:not(.active) ul {
        display: none;
    }
`