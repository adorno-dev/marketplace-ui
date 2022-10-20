import { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
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
    const setImageViewer = () => {
        const imageList = component.current?.querySelector("div")
        const images = component.current?.parentNode?.querySelectorAll(".image-browser img")
        images?.forEach(img => {
            const imageClone = img.cloneNode()
            imageClone.addEventListener("click", (ve:any) => {
                if (image.current !== null) {
                    image.current.src = ve.target.src
                }
            })
            imageList?.appendChild(imageClone)
        })
        images?.forEach(img => img.addEventListener("click", (pe: any) => {
            if (image.current !== null) {
                image.current.setAttribute("data-file", pe.target.getAttribute("data-file"))
                image.current.src = pe.target.src
                component.current?.classList.add("active")
            }
        }))
    }
    useEffect(() => {
        const input = document.querySelector<HTMLInputElement>(`input[type=file]#${props.name}`)
        const imageList = component.current?.querySelector("div")
        setImageViewer()
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
    }, [setImageViewer])
    return <>
    <section className="image-viewer" ref={component}>
        <i className="fa-solid fa-x" onClick={close}></i>
        <img ref={image} />
        <div></div>
    </section>
    </>
}

export const ImageViewerStyle = styled.section`
    position: absolute;
    display: none;
    flex-direction: column;
    background: #fff;
    margin: 0 auto;

    @media only screen and (max-width: 630px) {
        width: 94%;    
    }

    height: 345px;
    width: 600px;

    i[class^="fa-"] {
        position: absolute;
        background: #737373;
        padding: 2px 4px;
        border-radius: 20px;
        right: -8px;
        top: -8px;
        cursor: pointer;
    }
    
    > img {
        object-fit: cover;
        height: 100%;
    }

    > div {
        background: #181a1b;

        img {
            object-fit: cover;
            width: 40px;
            height: 40px;
            margin: 5px 5px 0 0;
            cursor: pointer;
        }
    }

    > &.active {
        display: flex;
    }
`