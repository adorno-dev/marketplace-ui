import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import './image-browser.scss'

type Props = {
    name: string,
    placeholder?: string,
    multiple?: boolean,
    images?: string[]
}

export const ImageBrowser = (props: Props) => {
    const component = useRef<HTMLDivElement>(null)
    const inputFile = useRef<HTMLInputElement>(null)
    const [visible, setVisible] = useState<boolean>(true)
    const clickHandler = () => {
        inputFile.current?.click()
    }
    useEffect(() => {
        inputFile.current?.addEventListener("change", (e: any) => {
            component.current?.querySelectorAll("img")
                .forEach(img => component.current?.removeChild(img))
            for (let idx = 0; idx < e.srcElement.files.length; idx++) {
                 let reader = new FileReader()
                 let viewer = document.createElement("img")
                 viewer.setAttribute("data-file", e.srcElement.files[idx].name)
                 component.current?.appendChild(viewer)
                 reader.onloadend = (e: any) => viewer.src = e.target.result
                 reader.readAsDataURL(e.srcElement.files[idx])
            }
            setVisible(false)
        })
    }, [])
    return <>
    <span className="image-browser" ref={component}>
        <input type="file" id={props.name} name={props.name} multiple={props.multiple} ref={inputFile} />
        <i className="fa-solid fa-plus" onClick={clickHandler}></i>

        { (visible && props.images === undefined) && <span>{props.placeholder}</span> }

        {props.images?.map(img => <img key={img} src={img} />)}

    </span>
    </>
}