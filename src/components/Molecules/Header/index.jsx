import { Link } from 'react-router-dom';
import { useLoadingContext } from '../../Contexts';
import './index.css';

const Header = () => {
 const { setLoading } = useLoadingContext();
 return (
  <header id="welcome-section">
   <div className="forest">
    <div className="silhouette">
     <div className="moon">
      <div className="container">
       <h1>
        <span className="line">Believe you can do it, then do it. </span>
       </h1>
       <h2>
        <span className="line">
         <span className="color">Experience is the name everyone</span>
        </span>
        <span className="line">
         <span className="color">gives to their mistakes.</span>
        </span>
       </h2>
       <div className="buttons">
        <Link to="/projects" onClick={() => setLoading(true)}>my portfolio</Link>
        <Link to="/projects" onClick={() => setLoading(true)} className="cta">
         get in touch
        </Link>
       </div>
      </div>
     </div>
    </div>
   </div>
  </header>
 );
};

export default Header;