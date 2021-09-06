import { Link } from 'react-router-dom';
import './index.css';

const Nav = ({ toggleMenu, showMenu }) => {
 return (
  <>
   <nav id="navbar">
    <div className="nav-wrapper">
     <Link to="/">
      <p className="brand">
       juan
       <strong>gidoni</strong>
      </p>
     </Link>
     <button
      onClick={toggleMenu}
      className={showMenu === 'active' ? 'menu-button active' : 'menu-button'}
     >
      <span />
     </button>
    </div>
   </nav>
  </>
 );
};
export default Nav;