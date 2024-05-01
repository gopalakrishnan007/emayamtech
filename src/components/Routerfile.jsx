import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Resourses from "./Resources";

export default function Routerfile(){
    return(
        
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/about" element={<About></About>}/>
                <Route path="/services" element={<Services></Services>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/resources" element={<Resourses></Resourses>}></Route>
            </Routes>
        
    )
}