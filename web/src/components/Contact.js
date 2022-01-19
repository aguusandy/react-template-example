function Contact(){
    return(
        <>
        <div className="container-fluid m-0 p-0">
            <div className="container-fluid col-12 col-sm-10 rounded-3 mx-auto my-2">
                <div className="container-fluid post-home rounded-3">
                <h2 className="my-4">Contact Us</h2>
                <ul className="list-unstyled mx-auto p-0 text-center w-100">
                    <div className="container-fluid col-4 p-0 m-0 redcontact text-center list-inline-item">
                        <i className="fab fa-instagram fa-3x"></i>
                        <li className=""><a className="fs-3" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram </a></li>
                    </div>
                    <div className="container-fluid col-4 p-0 m-0 redcontact text-center list-inline-item">
                        <i className="fab fa-github-square fa-3x"></i>
                        <li className=""><a className="fs-3" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
                    </div>
                </ul>
                </div>
              <hr/>
                  <h2 className="my-2">Send Us a Message: </h2>
                  <div className="container-fluid col-12 col-sm-10 fondo-comentario rounded-3 mt-4 py-2">
                      <div className="form-group">
                          <form className=" " > 
                              <p className="py-0 my-0">Name:</p>
                              <input type="text" className="form-control my-2" placeholder="Name Lastname"/>
                              <p className="py-0 my-0">Email:</p>
                              <input type="email" className="form-control my-2" placeholder="example@example.ex" />
                              <p className="py-0 my-0">Message:</p>
                              <textarea className="form-control my-2" placeholder="Type your message..."></textarea>
                              <button type="submit" className="btn btn-secondary">Send Message</button>
                          </form>
                      </div>
                  </div>      
              </div>
        </div>       
        </>
    );
}

export default Contact;