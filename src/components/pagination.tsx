import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
    pageIndex?: number,
    pageCount?: number,
    pageSize?: number,
    paginate: (pageIndex: number, pageSize?: number) => void
}

export const Pagination = (props?: Props) => {
    const sendPaginate = (e: any, pageIndex: number) => {
        e.preventDefault()
        props?.paginate(pageIndex, props.pageSize)
    }
    return (
        <PaginationStyle className="pagination">
            <Link to={`${props?.pageIndex}`} onClick={(e)=>sendPaginate(e, 1)}>
                <i className="fa-solid fa-backward"></i>
            </Link>
            {
                props?.pageCount !== undefined && props.pageCount > 0 ?
                 Array.from(Array(props?.pageCount).keys()).map(index => 
                <Link key={index+1} to={`${index+1}`} 
                      className={props?.pageIndex == index+1 ? "active": ""} 
                      onClick={(e)=>sendPaginate(e, index+1)}>{index+1}</Link>)
                : <Link to={`${1}`} onClick={(e)=>sendPaginate(e, 1)} >1</Link>
            }
            <Link to={`${props?.pageCount !== undefined && props?.pageCount > 0 ? props?.pageCount : props?.pageIndex}`}
                  onClick={(e)=>sendPaginate(e, props?.pageCount ?? 1)}>
                <i className="fa-solid fa-forward"></i>
            </Link>
        </PaginationStyle>
    )
}

export const PaginationStyle = styled.section`
    display: flex;
    justify-content: end;
    margin: 10px 0 0;

    a {
        font-size: 1em;
        font-weight: bold;
        text-align: center;
        width: 27px;
        border-right: 1px solid #313131;
    }

    a.active {
        color: #fff !important;
    }

    a:first-child {
        border-left: 1px solid #313131;
    }
`