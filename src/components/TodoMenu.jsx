import React, { useState } from 'react';
import styled from './TodoMenu.module.css';

export default function TodoMenu() {
  const [activeMenu, setActiveMenu] = useState({
    All: true,
    Active: false,
    Completed: false,
  });
  const menus = ['All', 'Active', 'Completed'];

  const MenuClick = (event) => {
    const clickedMenu = event.target.innerText;
    setActiveMenu(
      menus.reduce((acc, menu) => {
        acc[menu] = menu === clickedMenu;
        return acc;
      }, {})
    );
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
