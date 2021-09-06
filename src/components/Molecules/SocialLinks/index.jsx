import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
  </div>
 );
};

export default SocialLinks;