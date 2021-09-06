import './index.css';
import Logo from '../../Assets/Images/logo.png'
const Loading = () => {
 return (
  <div class="loading-screen">
   <div class="loading-animation">
    <img src={Logo} alt="logo" class="logo" />
    <div class="loading-bar"></div>
   </div>
  </div>
 )
}

export default Loading
