import { Link } from "react-router-dom"
import '../styles/navbar.css'
import Img1 from '../assests/12.png'
export default function Navbar(){

    return(
        <>
        <nav className="navbar navbar-expand-md bg-change ">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
    <img src={Img1}  height="80" alt=""/>
  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0  " >
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