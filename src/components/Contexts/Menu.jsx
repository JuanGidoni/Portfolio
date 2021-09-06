
import React, { useContext, useEffect, useState } from "react"
import { useLoadingContext } from ".";

const MenuContext = React.createContext();

export function useMenuContext() {
   return useContext(MenuContext);
}

export function MenuProvider({ children, ...props }) {
   const [menuState, setMenuState] = useState({ menuState: false });
   const toggleMenu = () => {
      setMenuState({
         menuState: !menuState.menuState
            ? 'active'
            : menuState.menuState === 'deactive'
               ? 'active'
               : 'deactive'
      });
   };
   useEffect(() => {
      const navbar = document.querySelector('#navbar');
      window.onscroll = () => {
         let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
         if (scrollPos >= 100) navbar.classList.add('bg-active');
         else navbar.classList.remove('bg-active');
      };
   }, [])
   const value = {
      toggleMenu,
      menuState,
      setMenuState
   }
   return (
      <MenuContext.Provider value={value} props={props}>
         {children}
      </MenuContext.Provider>
   )
}
