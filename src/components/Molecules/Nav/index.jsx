import { Link } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';
import './index.css';
import CV from '../../Assets/CV_Gidoni_Juan_2021.pdf';

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
     <div className="flex flex-center flex-row center">
      <button
       onClick={toggleMenu}
       className={showMenu === 'active' ? 'menu-button active' : 'menu-button'}
      >
       <span />
      </button>
      <div
       className={showMenu === 'active' ? 'd-none' : 'pl-3'}>
       <a href={CV}
        className="center flex flex-center flex-row">
        CV<FaFileDownload />
       </a>
      </div>
     </div>
    </div>
   </nav>
  </>
 );
};
export default Nav;