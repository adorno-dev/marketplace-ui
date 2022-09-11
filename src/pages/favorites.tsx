import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Pagination, Placeholder } from "../components"
import { Product } from "../models"

import './favorites.scss'

export const Favorites = () => {
    const [favorites, setFavorites] = useState<Product[]>([
        {id: 1, name: "Pistola Taurus G3c T.O.R.O. - 9x19mm", store: "A4U Store", reviews: 0, price: 1000.00 },
        {id: 2, name: "Pistola Taurus .9MM TS9/17 4\" CAFO",  store: "A4U Store", reviews: 0, price: 1000.00 },
        {id: 3, name: "Revólver Taurus .357 MAG RT608/8 6,5\" INAB", store: "A4U Store", reviews: 0, price: 1000.00 },
        {id: 4, name: "Pistola Beretta APX", store: "A4U Store", reviews: 0, price: 1000.00 },
        {id: 5, name: "COLDRE KYDEX IWB INVICTUS TAURUS SÉRIE 100", store: "A4U Store", reviews: 0, price: 1000.00 }
    ])
    return <>
        <Navbar />
        <Placeholder>
            <section className="favorites">
                <h2>My Favorites</h2>
                <p>We gonna show you here all your favorite products.</p>
                <ul>
                    {
                        favorites.map(f =>
                            <li key={f.id}>
                                <div><img src="/public/assets/products/product-1.webp" /></div>
                                <div>
                                    <Link to="/">{f.name}</Link>
                                    <div>
                                        <div className="reviews">
                                            <Link to="/">{f.reviews} Reviews</Link>
                                            <i className="fa-sharp fa-solid fa-star"></i>
                                            <i className="fa-sharp fa-solid fa-star"></i>
                                            <i className="fa-sharp fa-solid fa-star"></i>
                                            <i className="fa-sharp fa-solid fa-star"></i>
                                            <i className="fa-sharp fa-solid fa-star"></i>
                                        </div>
                                        <span>$ {f.price}0.000.000</span>
                                    </div>
                                    <div>
                                        <Link to="/">{f.store}</Link>
                                        <Link to="/">
                                            <span>REMOVE</span>
                                            <i className="fa-solid fa-trash"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
                <Pagination />
            </section>
        </Placeholder>
    </>
}