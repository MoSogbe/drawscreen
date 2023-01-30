import { Nav, Navbar, NavLink } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import '../Styles/index.css'
import NestleLogo from "../Images/nestleLogo.jpg"

const Navigationbar = () => {
    return (
        
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to="/" className="navbar-brand text-white" href="#">Nestle Nokofio App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
    </nav>
    );
}
 
export default Navigationbar;