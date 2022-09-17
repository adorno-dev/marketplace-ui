import { useEffect, useRef } from 'react'
import './image-viewer.scss'

export const ImageViewer = ({name}:{name?:string}) => {
    const component = useRef<HTMLDivElement>(null)
    const image = useRef<HTMLImageElement>(null)
    const close = () => {
        component.current?.classList.remove("active")
    }
    useEffect(() => {
        const inputFiles = document.querySelector<HTMLInputElement>(`input[type=file]#${name}`)
        inputFiles?.addEventListener("change", () => {
            const images = inputFiles.parentElement?.querySelectorAll<HTMLImageElement>("img")
            images?.forEach(img => img.addEventListener("click", (e: any) => {
                if (image.current !== null) {
                    image.current.src = e.target.src
                    component.current?.classList.add("active")
                }
            }))
        })
    }, [])
    return <>
    <span className="image-viewer" ref={component}>
        <i className="fa-solid fa-x" onClick={close}></i>
        <img ref={image} />
    </span>
    </>
}