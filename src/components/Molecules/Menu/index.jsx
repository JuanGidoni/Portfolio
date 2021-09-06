import { Link } from "react-router-dom";
import { useLoadingContext } from "../../Contexts";
import SocialLinks from "../SocialLinks";
import './index.css';

const Menu = ({ showMenu, toggleMenu }) => {
 const { setLoading } = useLoadingContext();
 return (
  <div className={`menu-container ${showMenu}`}>
   <div className="overlay" />
   <div className="menu-items">
    <ul>
     <li>
      <Link to="/" onClick={() => {
       toggleMenu();
       setLoading(true);
      }}>
       HOME
      </Link>
     </li>
     <li>
      <Link to="/about" onClick={() => {
       toggleMenu();
       setLoading(true);
      }}>
       ABOUT
      </Link>
     </li>
     <li>
      <Link to="/projects" onClick={() => {
       toggleMenu();
       setLoading(true);
      }}>
       PORTFOLIO
      </Link>
     </li>
     <li>
      <Link to="/contact" onClick={() => {
       toggleMenu();
       setLoading(true);
      }}>
       CONTACT
      </Link>
     </li>
    </ul>
    <SocialLinks />
   </div>
  </div>
 );
};
export default Menu;