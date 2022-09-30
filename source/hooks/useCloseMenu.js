import { useRef, useEffect } from "react";

const useCloseMenu = (toggleMenuHandler) => {
    const menuRef = useRef();

    useEffect(() => {
      const clickHandler = (e) => {
        if (!menuRef.current.contains(e.target)) toggleMenuHandler();
      };
  
      document.addEventListener('mousedown', clickHandler);
  
      return () => {
        document.removeEventListener('mousedown', clickHandler);
      };
    }, []);

    return menuRef;
}

export default useCloseMenu;