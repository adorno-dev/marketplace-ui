import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Authorized, Navbar, Pagination, Placeholder } from "../components"
import { Paginated } from "../contracts/responses/paginated-response"
import { Favorite } from "../models"
import { productService } from "../services"
import { favoriteService } from "../services/favorite-service"

import './favorites.scss'

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
            <section className="favorites">
                <h2>My Favorites</h2>
                <p>We gonna show you here all your favorite products.</p>
                <ul>
                    {
                        favorites?.items.map(f =>
                            <li key={f.id}>
                                <img className="image" src={f.screenshoot} />
                                <Link className="name" to={`/products/${f.id}`}>{f.name}</Link>
                                <div className="reviews">
                                    {/* <Link to="/">{f.reviews} Reviews</Link> */}
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
            </section>
        </Placeholder>
    </Authorized>
    </>
}