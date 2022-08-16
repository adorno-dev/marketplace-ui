import { useEffect, useRef } from 'react'
import './index.scss'

export const SelectChecker = () => {
    const selector = useRef<HTMLDivElement>(null)
    const items = useRef<HTMLUListElement>(null)

    useEffect(() => {
        
        selector.current?.addEventListener("click", () => {
            selector.current?.classList.toggle("open");
        });

        items.current?.querySelectorAll(".item")
             .forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    
                    let checked = items.current?.querySelectorAll(".checked"),
                        text = selector.current?.querySelector<HTMLSpanElement>(".btn-text");
                    
                    if (checked && checked.length > 0) {
                        if (text?.innerText !== undefined)
                            text.innerText = `Select Language (${checked.length})`
                    } else {
                        if (text?.innerText !== undefined)
                            text.innerText = `Select Language`
                    }
                })
             })

    }, [])
    return (
        <div>
            <div className="select-checker" ref={selector}>
                <span className="btn-text">Select Language</span>
                <span className="arrow-dwn">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            <ul className="list-items" ref={items}>
                <li className="item">
                    <span className="checkbox">
                        <i className="fa-solid fa-check check-icon"></i>
                    </span>
                    <span className="item-text">HTML & CSS</span>
                </li>
                <li className="item">
                    <span className="checkbox">
                        <i className="fa-solid fa-check check-icon"></i>
                    </span>
                    <span className="item-text">Bootstrap</span>
                </li>
                <li className="item">
                    <span className="checkbox">
                        <i className="fa-solid fa-check check-icon"></i>
                    </span>
                    <span className="item-text">Java Script</span>
                </li>
                <li className="item">
                    <span className="checkbox">
                        <i className="fa-solid fa-check check-icon"></i>
                    </span>
                    <span className="item-text">Node JS</span>
                </li>
                <li className="item">
                    <span className="checkbox">
                        <i className="fa-solid fa-check check-icon"></i>
                    </span>
                    <span className="item-text">React JS</span>
                </li>
                <li className="item">
                    <span className="checkbox">
                        <i className="fa-solid fa-check check-icon"></i>
                    </span>
                    <span className="item-text">Mongo DB</span>
                </li>
            </ul>
        </div>
    )
}