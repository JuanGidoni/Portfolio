import { FaCss3, FaJsSquare, FaReact, FaHtml5, FaExternalLinkAlt, FaJava, FaBootstrap } from 'react-icons/fa';

const Project = ({ tech, link, repo, img, title, children }) => {

 const techs = {
  html5: <FaHtml5 />,
  css: <FaCss3 />,
  bootstrap: <FaBootstrap />,
  js: <FaJsSquare />,
  react: <FaReact />,
  java: <FaJava />
 };

 const linked = link || 'http://linkedin.com/in/juangidoni';
 const repository = repo || 'http://github.com/juangidoni';

 return (
  <div className="project">
   <a className="project-link" href={linked} target="_blank" rel="noopener noreferrer">
    <img className="project-image" src={img} alt={'Screenshot of ' + title} />
   </a>
   <div className="project-details">
    <div className="project-tile">
     <p className="icons">
      {tech.split(' ').map(t => (
       techs[t]
      ))}
     </p>
     {title}{' '}
    </div>
    {children}
    <div className="buttons">
     <a href={repository} target="_blank" rel="noopener noreferrer">
      View source <FaExternalLinkAlt />
     </a>
     <a href={linked} target="_blank" rel="noopener noreferrer">
      Try it Live <FaExternalLinkAlt />
     </a>
    </div>
   </div>
  </div>
 );
};

export default Project;