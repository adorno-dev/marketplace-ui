import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Placeholder } from "../components"
import { Product } from "../models"

import './favorites.scss'

export const Favorites = () => {
    const [favorites, setFavorites] = useState<Product[]>([
        {id: 1, name: "Pistola Taurus G3c T.O.R.O. - 9x19mm", description: "Com o aumento da demanda por red dots em pistolas, tanto para uso de esporte, quanto o uso para defesa, a Taurus lançou no Brasil a G3C T.O.R.O.", store: "A4U Store", reviews: 0, price: 1000.00 },
        {id: 2, name: "Pistola Taurus .9MM TS9/17 4\" CAFO", description: "Robusta, confiável, segura e de fácil operação. Possui sistema de ação com percussor lançado – striker, mecanismo com o exclusivo sistema de segurança de dupla trava de gatilho (trava do gatilho e trava manual), trava do percussor e trava de queda, que aliados ao mecanismo de disparo e design inovador, asseguram a praticidade de pronto emprego e a facilidade de manutenção.", store: "A4U Store", reviews: 0, price: 1000.00 },
        {id: 3, name: "Revólver Taurus .357 MAG RT608/8 6,5\" INAB", description: "Calibre: .357 MAG\nComprimento Total:360mm\nComprimento do Cano: 6,5\" (165mm)\nCapacidade: 8 tiros\nAcabamento: Inox Alto Brilho\nAção: SA/DA\nMira: Alça Regulável\nPeso: 1460g", store: "A4U Store", reviews: 0, price: 1000.00 },
        {id: 4, name: "Pistola Beretta APX", description: "A nova pistola semiautomática Beretta APX , utilizando uma estrutura de chassi serializada removível, pode ser facilmente modificada com carcaças de estrutura de punho substituíveis e é simples de desmontar e manter.", store: "A4U Store", reviews: 0, price: 1000.00 },
        {id: 5, name: "COLDRE KYDEX IWB INVICTUS TAURUS SÉRIE 100", description: "O Coldre Kydex® para Plataforma Taurus® Iwb Destro SÉRIE 100 INVICTUS têm tecnologia Kydex® USA, um produto diferenciado no meio tático, para operadores e operadoras que exigem o melhor, sempre.", store: "A4U Store", reviews: 0, price: 1000.00 }
    ])
    return <>
        <Navbar />
        <Placeholder>
            <section className="favorites">
                <h2>Favorites</h2>
                <p>We gonna show you here all your favorite products.</p>
                <ul>
                    <li><b>Product(s)</b></li>
                    {
                        favorites.map(f =>
                            <li key={f.id}>
                                <div>
                                    test
                                </div>
                                <div>
                                    <Link to="/favorites">{f.name}</Link>
                                    <div>{f.description}</div>
                                    <div className="reviews">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <Link to="reviews">{f.reviews} Reviews</Link>
                                    </div>
                                    <Link to="store">{f.store}</Link>
                                </div>
                                <div>$ {f.price}</div>
                            </li>
                        )
                    }
                </ul>
            </section>
        </Placeholder>
    </>
}