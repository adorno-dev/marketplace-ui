import { Link } from 'react-router-dom'
import './pagination.scss'

type Props = {
    pageIndex?: number,
    pageCount?: number,
    paginate: (pageIndex: number, pageSize?: number) => void
}

export const Pagination = (props?: Props) => {
    const sendPaginate = (e: any, pageIndex: number) => {
        e.preventDefault()
        props?.paginate(pageIndex)
    }
    return (
        <section className="pagination">
            <Link to={`${props?.pageIndex}`} onClick={(e)=>sendPaginate(e, 1)}>
                <i className="fa-solid fa-backward"></i>
            </Link>
            {
                props?.pageCount !== undefined && props.pageCount > 0 ?
                 Array.from(Array(props?.pageCount).keys()).map(index => 
                <Link key={index+1} to={`${index+1}`} 
                      className={props?.pageIndex == index+1 ? "active": ""} 
                      onClick={(e)=>sendPaginate(e, index+1)} >{index+1}</Link>)
                : <Link to={`${1}`}>1</Link>
            }
            <Link to={`${props?.pageCount !== undefined && props?.pageCount > 0 ? props?.pageCount : props?.pageIndex}`}
                  onClick={(e)=>sendPaginate(e, props?.pageCount ?? 1)}>
                <i className="fa-solid fa-forward"></i>
            </Link>
        </section>
    )
}