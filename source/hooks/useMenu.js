import { useState } from 'react';

const useMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenuHandler = () => setIsVisible(!isVisible);

  return [isVisible, toggleMenuHandler];
};

export default useMenu;
