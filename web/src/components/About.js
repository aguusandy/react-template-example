import { Link } from "react-router-dom";

function About(){
    return(
        <>
        <div class="container-fluid col-12 col-sm-10 fondotexto rounded-3 mx-auto my-2 py-2">
        <div class="container-fluid post-home my-4 py-1 rounded-3">
            <h2 class="">About This Page</h2>
            <p class="mx-4 mb-4">
                This is a free example of a Fronte-End Website.
            </p>
            <p class="mx-4 mb-4">
                It's just a kind of "template" that have the basic components of React as navegation, 
                pages, components of pages, routes, an some others...
                You can implement all you need.
                And obviously, the template don't have any back-end.
            </p>
            <p class="mx-4 mb-4">
                The objective of this is that you can take this template and remake as you want or as you need.
            </p>
            <div class="text-center">
                <Link to="/" class="btn btn-secondary">Back</Link>
            </div>
        </div>
    </div>


        </>
    );
}

export default About;