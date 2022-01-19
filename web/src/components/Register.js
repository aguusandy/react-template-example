function Register(){
    //register component

    return(
        <>
        <form className="row g-3 col-8 mx-auto my-4">
            <div className="text">
                <h1>Register</h1>
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label">User Name</label>
                <input type="text" className="form-control" id="inputUserName" placeholder="User123"/>
            </div>
            <div className="col-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="example@example.com"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Repeat Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" placeholder="City name   "/>
            </div>
            <div className="col-md-6">
                <label for="inputState" className="form-label">State</label>
                <input type="text" className="form-control" id="inputState" placeholder="State name   "/>
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" placeholder="0000"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
        </>
    );

}

export default Register;