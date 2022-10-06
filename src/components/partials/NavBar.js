import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/bobas'>All Bobas</Link>
                </li>

                <li>
                    <Link to='/bobas/new'>Log a new Boba Drink</Link>
                </li>
            </ul>
        </div>
    )
}