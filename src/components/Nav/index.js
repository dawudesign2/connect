import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/signIn">Sign In</Link>
            <Link to="/signUp">Sign Up</Link>
        </nav>
    )
}


export default Nav;