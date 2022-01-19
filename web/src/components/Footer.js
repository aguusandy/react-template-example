import { Link } from "react-router-dom";

function Footer(){
    //footer component
    return(
        <>
        <div className="container-fluid text-center bg-light text-md-left">
            <div className="row">
                <div className="col-md-3 mt-md-0 mt-3">                
                    <h5 className="text">Footer</h5>
                    <p>You can add some information here.</p>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3"/>            
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text">Some Links</h5>
                    <ul className="list-unstyled">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                </div>            
                <div className="col-md-3 mb-md-0 mb-3">           
                    <h5 className="text">Another Links</h5>
                    <ul className="list-unstyled ">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Link 1</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Link 2</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Link 3</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright py-3 col-md-3 mb-md-0 mb-3">
                    <label>© Copyright :</label> 
                    <Link className="nav-link active" aria-current="page" to="/">example.example</Link>
                </div>
            </div>
           
        </div>
       
        </>
    );
}

export default Footer;