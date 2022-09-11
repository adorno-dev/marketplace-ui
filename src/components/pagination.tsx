import { Link } from 'react-router-dom'
import './pagination.scss'

export const Pagination = () => {
    const pages = [1,2,3,4,5,6,7,8,9,10]
    // const pages = [10,11,12,13,14,15,16,17,18,19]
    return (
        <section className="pagination">
            <Link to="/favorites">
                <i className="fa-solid fa-backward"></i>
            </Link>
            {pages.map(page => <Link to="/favorites">{page}</Link>)}
            <Link to="/favorites">
                <i className="fa-solid fa-forward"></i>
            </Link>
        </section>
    )
}