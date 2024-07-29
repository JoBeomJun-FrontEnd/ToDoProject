import React, { useContext, useState } from 'react';
import styled from './TodoMenu.module.css';
import { HeaderMenuContext } from '../context/HeaderMenuContext';

export default function TodoMenu() {
  const [activeMenu, setActiveMenu] = useState({
    All: true,
    Active: false,
    Completed: false,
  });
  const menus = ['All', 'Active', 'Completed'];

  const { changeSelectMenu } = useContext(HeaderMenuContext);

  const MenuClick = (event) => {
    const clickedMenu = event.target.innerText;
    setActiveMenu(
      menus.reduce((acc, menu) => {
        acc[menu] = menu === clickedMenu;
        return acc;
      }, {})
    );
    changeSelectMenu(clickedMenu);
  };

  return (
    <ul className="font-bold pr-3">
      {menus.map((menu) => (
        <button
          key={menu}
          className={` ${activeMenu[menu] ? styled.activeMenu : styled.menu} `}
          onClick={MenuClick}
        >
          {menu}
        </button>
      ))}
    </ul>
  );
}
