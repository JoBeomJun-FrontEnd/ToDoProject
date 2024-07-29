import { createContext, useState } from 'react';

export const HeaderMenuContext = createContext();

export function HeaderMenuProvider({ children }) {
  const [selectMenu, setSelectMenu] = useState('All');

  const changeSelectMenu = (name) => {
    setSelectMenu(name);
  };

  return (
    <HeaderMenuContext.Provider value={{ selectMenu, changeSelectMenu }}>
      {children}
    </HeaderMenuContext.Provider>
  );
}
