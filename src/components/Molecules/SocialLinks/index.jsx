import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import CV from '../../Assets/CV_Gidoni_Juan_2021.pdf';

const SocialLinks = () => {
 return (
  <div className="social">
   <a
    id="profile-link"
    href="https://github.com/JuanGidoni"
    target="_blank"
    rel="noopener noreferrer"
    title="Link to author's GitHub Profile"
   >
    {' '}
    <FaGithub />
   </a>
   <a
    href="https://www.linkedin.com/in/juangidoni/"
    target="_blank"
    rel="noopener noreferrer"
    title="Link to author's LinkedIn"
   >
    {' '}
    <FaLinkedin />
   </a>
   <a
    href={CV}
    target="_blank"
    rel="noopener noreferrer"
    title="Download Author CV"
   >
    {' '}
    <FaFileDownload />
   </a>
  </div>
 );
};

export default SocialLinks;