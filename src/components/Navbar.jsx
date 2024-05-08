import { Link } from "react-router-dom"
import '../styles/navbar.css'
import Logoimg from '../assests/logo.png'
export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-md pad bg-black ">
  <div className="container-fluid">
  <Link to = '/'  className="nav-link white" >
    <img src={Logoimg} className="logoimage" alt="emeyamtechlogo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav center ms-auto me-auto mb-0 mt-0" >
        <li className="nav-item">
          <Link to = '/'  className="nav-link white" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to = '/about'  className="nav-link white" >About Us</Link>
        </li>    
        <li className="nav-item">
          <Link className="nav-link white" to = '/services'>Services</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link white" to = '/resources'>Resourses</Link>
        </li>  
      </ul>
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <button className="btn pink-bg white" type="submit">
          <Link className="nav-link" to = '/contact'>Contact Us</Link></button>
    </div>
  </div>
</nav>
        
        </>
    )
}