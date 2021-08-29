import './index.css';
import { Link as Linked } from 'react-router-dom';

const Link = ({ url, text, className }) => {
 return (
  <Linked to={url} className={className}>
   {text}
  </Linked>
 )
}

export default Link
