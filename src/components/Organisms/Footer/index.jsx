import SocialLinks from "../../Molecules/SocialLinks";
import './index.css';

const Footer = () => {
 return (
  <footer>
   <div className="wrapper">
    <h3>THANKS FOR VISITING</h3>
    <p>© {new Date().getFullYear()} Juan Gidoni.</p>
    <SocialLinks />
   </div>
  </footer>
 );
};
export default Footer;