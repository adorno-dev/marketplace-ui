import { useEffect, useRef } from 'react'
import './image-viewer.scss'

type Props = {
    name?: string
}

export const ImageViewer = (props: Props) => {
    const component = useRef<HTMLDivElement>(null)
    const image = useRef<HTMLImageElement>(null)
    const close = () => {
        component.current?.classList.remove("active")
    }
    const clearImages = () => {
        const imageList = component.current?.querySelector("div")
        const images = imageList?.querySelectorAll("img")
        images?.forEach(img => imageList?.removeChild(img))
    }
    useEffect(() => {
        const input = document.querySelector<HTMLInputElement>(`input[type=file]#${props.name}`)
        const imageList = component.current?.querySelector("div")
        input?.addEventListener("change", (ie: any) => {
            clearImages()

            for (let i = 0; i < ie.target.files.length; i++) {
                 let reader = new FileReader()
                 let viewer = document.createElement("img")
                 viewer.setAttribute("data-file", ie.target.files[i].name)
                 viewer.addEventListener("click", (ve: any) => {
                    if (image.current !== null) {
                        image.current.src = ve.target.src
                    }
                 })
                 reader.onloadend = (re: any) => viewer.src = re.target.result
                 reader.readAsDataURL(ie.target.files[i])
                 imageList?.appendChild(viewer)
            }

            
            input?.parentNode?.querySelectorAll<HTMLImageElement>("img")
                .forEach(img => img.addEventListener("click", (pe: any) => {
                    
                    if (image.current !== null) {
                        image.current.setAttribute("data-file", pe.target.getAttribute("data-file"))
                        image.current.src = pe.target.src
                        component.current?.classList.add("active")
                    }
                }))
        })
    }, [])
    return <>
    <section className="image-viewer" ref={component}>
        <i className="fa-solid fa-x" onClick={close}></i>
        <img ref={image} />
        <div></div>
    </section>
    </>
}