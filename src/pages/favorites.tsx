import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Authorized, Navbar, Pagination, Placeholder } from "../components"
import { FavoriteResponse } from "../contracts/responses/favorite-response"
import { Paginated } from "../contracts/responses/paginated-response"
import { FavoriteService } from "../services/favorite-service"

import './favorites.scss'

export const Favorites = () => {
    const [favorites, setFavorites] = useState<Paginated<FavoriteResponse>>()
    useEffect(() => {
        FavoriteService.getFavorites()
                       .then(res => res !== undefined && setFavorites(res.data))
    }, [])
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
                                <img className="image" src="/public/assets/products/product-1.webp" />
                                <Link className="name" to="/favorites">{f.name}</Link>
                                <div className="reviews">
                                    {/* <Link to="/">{f.reviews} Reviews</Link> */}
                                    <Link to="/">0 Reviews</Link>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </div>
                                <span className="price">$ {f.price}</span>
                                <Link className="store" to="/{f.store}">VISIT STORE</Link>
                                <Link className="remove" to="/">
                                    <span>REMOVE</span>
                                    <i className="fa-solid fa-trash"></i>
                                </Link>
                            </li>
                        )
                    }
                </ul>
                <Pagination />
            </section>
        </Placeholder>
    </Authorized>
    </>
}