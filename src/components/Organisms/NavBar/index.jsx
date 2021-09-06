import { useMenuContext } from "../../Contexts";
import Menu from "../../Molecules/Menu";
import Nav from "../../Molecules/Nav";

const NavBar = () => {
 const { toggleMenu, menuState } = useMenuContext();

 return (
  <div>
   <Menu toggleMenu={toggleMenu} showMenu={menuState.menuState} />
   <Nav toggleMenu={toggleMenu} showMenu={menuState.menuState} />
  </div>
 )
}

export default NavBar;