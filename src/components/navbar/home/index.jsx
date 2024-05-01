import React, { useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import './style.scss'

const Navbar = () => {
  const data = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Skills",
      to: "/skills",
    },
    {
      label: "Resume",
      to: "/resume",
    },
    {
      label: "Portfolio",
      to: "/portfolio",
    },
    {
      label: "Contact",
      to: "/contact",
    },
  ];
  const [toggle, settoggle] = useState(false);
  const handleToggle = () => {
    settoggle(!toggle);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggle?'active':''}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link className="navbar_container_menu_item_links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar_toggle_icon" onClick={handleToggle}>
          {toggle ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
