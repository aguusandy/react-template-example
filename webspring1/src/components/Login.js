import { Link } from "react-router-dom";

function Login (){
//login component
    return(
        <>
        <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
            <div className="col-md-9 col-lg-6 col-xl-5 mb-3">
                <img src="/images/login.svg" className="img-fluid" alt="login"/>
            </div>    
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">  
                <form className="g-3 col-8 mx-auto ">
                    <div className="col-12">
                        <label for="inputUser" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="inputUserName" placeholder="Type your User name"/>
                    </div>
                    <div className="col-12">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Type your password"/>
                    </div>
                    <div className="col-12">
                        <Link className="nav-link active" aria-current="page" to="/">Did you forget your password?</Link>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn col-6 btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );

}

export default Login;