import { Link } from "react-router-dom"
import { Product } from "../models";

export const ProductList = ({products}:{products: Product[] | undefined}) => {
    const currency = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    return <>
        <ul className="products">
            {
                products?.map(p => 
                    <li key={p.id}>
                        <Link to={`/products/${p.id}`}>
                            <img src={p.screenshoot} />
                        </Link>
                        <Link className="product" to={`/products/${p.id}`}>{p.name}</Link>
                        { p.store && <Link className="store" to={`/stores/${p.store.id}`}>{p.store.name}</Link> }
                        <div className="split">
                            <span className="reviews">
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <Link to="reviews">0 Reviews</Link>
                            </span>
                            <span className="price">{currency.format(p.price).replace("$", "$ ")}</span>
                        </div>
                    </li>
                )
            }
        </ul>
    </>
}