function NotFound(){

    return(
        <>
        <div className="container-fluid">
            <h5 className="text-center my-2">Sorry, Page not Found...</h5>
            <div className="col-md-9 col-lg-6 col-xl-5 mb-3 mx-auto">
                <img src="/images/404.jpg" className="img-fluid" alt="404"/>
            </div>
        </div>
        </>
    );
}

export default NotFound;