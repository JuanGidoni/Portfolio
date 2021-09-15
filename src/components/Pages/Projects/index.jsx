import Project from "../../Organisms/Project";
import Triviex from '../../Assets/Projects/triviex.png';
import Integra from '../../Assets/Projects/integra.png';
import DigiChanges from '../../Assets/Projects/dg.png';
import Sheltr from '../../Assets/Projects/sheltr.png';
import CV from '../../Assets/CV_Gidoni_Juan_2021.pdf';

import './index.css';

const Projects = () => {
 return (
  <section id="projects">
   <div className="projects-container">
    <div className="heading">
     <h3 className="title">Experience</h3>
     <p className="separator" />
     <div className="subtitle flex flex-center flex-col">
      <p>
       Here's a list of <u>most</u> of the projects I've been working on lately.
      </p>
      <p>
       Also my experience as <strong className="color"> FrontEnd Web Developer.</strong>
      </p>
     </div>
    </div>
    <div className="projects-wrapper">
     <Project
      title="Integra Media SRL"
      img={Integra}
      tech="react html5 css js"
      link="https://integramedia.com.ar"
      repo="https://github.com/juangidoni"
     >
      <small>
       Working as a React Developer from July 2021
      </small>
      <p>
       Development of a lot of projects using React, Tailwind, Unit Testing, Rematch/Redux and <u>Scrum</u> Méthodologie.
      </p>
     </Project>
    </div>
    <div className="projects-wrapper">
     <Project
      title="DigiChanges"
      img={DigiChanges}
      tech="react html5 css js"
      link="https://digichanges.com"
      repo="https://github.com/DigiChanges"
     >
      <small>
       Worked as a React Developer (3 months)
      </small>
      <p>
       Development of an admin interface/dashboard using React, Tailwind, Redux, Redux Saga, and <u>Scrum</u> Méthodologie.
      </p>
     </Project>
    </div>
    <div className="projects-wrapper">
     <Project
      title="Triviex"
      img={Triviex}
      tech="react java bootstrap"
      link="https://github.com/JuanGidoni"
      repo="https://github.com/JuanGidoni/triviex-build"
     >
      <small>
       Built using Java (backend) and React JS (frontend) with Bootstrap.
      </small>
      <p>
       This is a full-stack website that I made with a partner, which lets the users play a trivia game about
       cience and medicine knowledge from their campus university.
      </p>
     </Project>
    </div>
    <div className="projects-wrapper">
     <Project
      title="Sheltr"
      img={Sheltr}
      tech="html5 css js bootstrap"
      link="https://sheltr.com.ar"
      repo="https://github.com/JuanGidoni/sheltr"
     >
      <small>
       Built using HTML5, CSS3, Javascript and Bootstrap.
      </small>
      <p>
       This is a static website using HTML5 and CSS. Adding Javascript to some functionalities.
       Bootstrap was used only for the grid system.
      </p>
     </Project>
    </div>
    <div className="projects-wrapper flex flex-center flex-col center">
     <small>
      Want more?
     </small>
     <p className="p-1">
      Check my <a className="color" href="https://www.linkedin.com/in/juangidoni/" rel="noreferrer" target="_blank">
       <strong>LinkedIn profile</strong></a>  or
      <a className="color" href={CV} rel="noreferrer" target="_blank">
       <strong> download my CV</strong>
      </a>.
     </p>
    </div>
   </div>
  </section >
 );
};

export default Projects;