import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav className="nav">
            <Link to= '/'>
            <div>HOME</div>
            </Link>
            <Link to='/breeds'>
            <div>BREEDS PAGE</div>
            </Link>
            <Link to='/about'>
            <div>ABOUT US</div>
            </Link>

        </nav>
    )
}