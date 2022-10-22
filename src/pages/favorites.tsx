import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Authorized, Navbar, Pagination, Placeholder } from "../components"
import { Paginated } from "../contracts/responses/paginated-response"
import { Favorite } from "../models"
import { productService } from "../services"
import { favoriteService } from "../services/favorite-service"

export const Favorites = () => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const [favorites, setFavorites] = useState<Paginated<Favorite>>()
    const fetchData = useCallback((pageIndex?: number, pageSize?: number)=>{
        favoriteService.getFavorites({pageIndex})
                       .then(res => res !== undefined && setFavorites(res.data))        
    }, [])
    const unfavorite = async (e: any) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute("data-id")
        await productService.unfavorite(id)
        fetchData()
    }
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return <>
    <Authorized>
    <Navbar />
        <Placeholder>
            <FavoritesStyle>
                <h2>My Favorites</h2>
                <p>We gonna show you here all your favorite products.</p>
                <ul>
                    {
                        favorites?.items.map(f =>
                            <li key={f.id}>
                                <img className="image" src={f.screenshoot} />
                                <Link className="name" to={`/products/${f.id}`}>{f.name}</Link>
                                <div className="reviews">
                                    <Link to="/">0 Reviews</Link>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </div>
                                <span className="price">{currency.format(f.price).replace("$", "$ ")}</span>
                                <Link className="store" to={`/stores/${f.storeId}`}>VISIT STORE</Link>
                                <Link className="remove" to="/favorites" data-id={f.id} onClick={unfavorite}>
                                    <span>REMOVE</span>
                                    <i className="fa-solid fa-trash"></i>
                                </Link>
                            </li>
                        )
                    }
                </ul>
                <Pagination pageIndex={favorites?.pageIndex} pageCount={favorites?.pageCount} paginate={fetchData} />
            </FavoritesStyle>
        </Placeholder>
    </Authorized>
    </>
}

export const FavoritesStyle = styled.section`
    ul {
        list-style: none;
        align-items: center;
        margin: 10px 0;

        li {
            display: grid;            
            column-gap: 8px;     
            grid-template-columns: 100px 170px;       
            grid-template-areas: 
                "image name    name"
                "image reviews price"
                "image store   remove";
            
            border-bottom: 1px solid #424242;
            padding: 5px 0;

            .image {
                grid-area: image;
                justify-self: left;

                object-fit: cover;
                width: 100px;
                height: 75px;
            }

            .name {
                grid-area: name;
                font-weight: bold;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .reviews {
                grid-area: reviews;
                font-size: .95em;
                align-self: center;
                a {
                    margin-right: 5px;
                }
            }

            .price {
                grid-area: price;
                align-self: center;
                text-align: right;
                font-weight: bold;
            }

            .store {
                font-size: .85em;
                font-weight: bold;
                align-self: center;
            }

            .remove {
                grid-area: remove;
                justify-self: right;
                align-self: center;
                span {
                    font-size: .9em;
                    font-weight: bold;
                    margin-right:  5px;
                }
            }
        }
    }
`