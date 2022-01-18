import { Link } from "react-router-dom";

function Navbar () {

    //narvab component
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">WebSite</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home Link</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Another Link</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown 1
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/about">About</Link></li>
                        <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">Log In</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );


}

export default Navbar;