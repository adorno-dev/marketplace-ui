import { useCallback, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Pagination, Placeholder } from "../../../components"
import { Paginated } from "../../../contracts/responses/paginated-response"
import { ProductResponse } from "../../../contracts/responses/product-response"
import { productService } from "../../../services/product-service"

export const Products = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const {id} = useParams()
    const navigate = useNavigate()
    const [products, setProducts] = useState<Paginated<ProductResponse>>()
    const createHandler = () => {
        navigate("/admin/products/new")
    }
    const paginate = (pageIndex: number, pageSize?: number) => {
        productService.getProducts({pageIndex})
                       .then(res => setProducts(res.data))
    }
    const fetchData = useCallback(()=>{
        productService.getProducts({pageIndex: 1})
                      .then(res => setProducts(res.data))
    }, [id])
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return <>
    <Authorized>
    <Navbar />
    <Placeholder>
        <ProductsStyle>
            <h2>Products</h2>
            <p>There are {products?.totalItems} products available.</p>
            <div>
                <Link to="/admin">Back to Admin</Link>
                <button onClick={createHandler}>Create</button>
            </div>
            <ul>
                <li>
                    <b>NAME</b>
                    <b className="columns">STORE</b>
                    <b className="columns">PRICE</b>
                </li>
            {
                products?.items.map(m =>
                    <li key={m.id}>
                        <span>{m.name}</span>
                        <span className="columns">{m.store.name}</span>
                        <span className="columns">{currency.format(m.price).replace("$", "$ ")}</span>
                        <div>
                            <Link to={{pathname: `/admin/products/edit/${m.id}`}}>EDIT<i className="fa-solid fa-pen-to-square"></i></Link>
                            <Link to={{pathname: `/admin/products/delete/${m.id}`}}>DELETE<i className="fa-solid fa-trash"></i></Link>
                        </div>
                    </li>
                )
            }
            </ul>
            <Pagination pageIndex={products?.pageIndex} pageCount={products?.pageCount} paginate={paginate} />
        </ProductsStyle>
    </Placeholder>
    </Authorized>
    </>
}

export const ProductsStyle = styled.section`
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0 0;

    }
    ul {
        list-style: none;
        li {
            display: grid;


            @media only screen and (min-width: 900px) {
                grid-template-columns: minmax(115px, 795px) minmax(115px, 795px) minmax(115px, 795px) 150px;
                .columns {
                    display: unset;
                    text-align: center;
                }
            }

            @media only screen and (max-width: 900px) {
                grid-template-columns: auto 140px;
                .columns {
                    display: none;
                }
            }

            align-items: center;
            padding: 5px 0;
            border-bottom: 1px solid #424242;
            > span {
                font-size: 1em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            > div {
                text-align: right;
                font-size: .95em;
                font-weight: bold;
                i {padding-left: 5px;}
                a {margin-right: 10px;}
            }

            &:hover {
                color: rgb(160, 160, 160)
            }
        }
    }
`