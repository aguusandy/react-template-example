import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage"

function AppRouters() {

    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route exact path="/" element={<HomePage/>}/>               
                <Route path="/login" element={<LoginPage/>} />   
                <Route path="register" element={<RegisterPage/>} />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>  
            <Footer/>      
        </BrowserRouter>
    );

}

export default AppRouters;