import React, { useEffect, useState } from "react";
import {GoTriangleRight, GoTriangleLeft} from "react-icons/go";
import {NavLink} from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const [colorBackground, setColorBackground] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll',  () => {
      if (window.scrollY > 50) {
        setColorBackground(true);
      } else {
        setColorBackground(false);
      }
    });
  },[window.scrollY]);

  let activePage = {
    color: "white",
    backgroundColor: "#a77bce",
    borderRadius:"5px"
  };
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  }
  const menuItems = [
    {
      name: "Home",
      link: "/",
      id: "home",
    },
    {
      name: "Services",
      link: "/services",
      id: "services",
    },
    {
      name: "Artibedded",
      link: "/about",
      id: "about",
    },
    {
      name: "Career",
      link: "/career",
      id: "career",
    },
    {
      name: "Contact",
      link: "/contact",
      id: "contact",
    },
  ];

  
  return (
    
      <div className={`NavBar ${showMenu ? "show-nav" : "hidden-nav"} ${colorBackground ? "bg-color-navbar" : ""}`}>
        <div className="Left" >
          <div>
            <GoTriangleLeft style={{color:"#9e6cc9"}} />
            <GoTriangleLeft  style={{color:"#9e6cc9", margin:"5px", }}/>
          </div>
          <div>
            <GoTriangleLeft  style={{color:"#9e6cc9"}}/>
            <GoTriangleLeft  style={{color:"#9e6cc9", margin:"5px"}}/>
          </div>
        </div>
        <div className="center">
          {menuItems.map((item) => (
             
              <NavLink
              className="item"
              key={item.id}
                to={item.link}
                style={({ isActive }) =>
                isActive ? activePage : undefined
              }
              
              >
                {item.name}
              </NavLink>
             
          ))}
        </div>
        <div className="Right">
          <div>
            <GoTriangleRight style={{color:"#9e6cc9", margin:"5px"}} />
            <GoTriangleRight style={{color:"#9e6cc9"}} />
          </div>
          <div>
            <GoTriangleRight style={{color:"#9e6cc9", margin:"5px"}} />
            <GoTriangleRight  style={{color:"#9e6cc9"}}/>
          </div>
        </div>
        <div className="hamburger "  onClick={handleShowMenu}>
            <div className="line1"> </div>
            <div className="line2"> </div>
            <div className="line3"> </div>
      </div>
      </div>
     
  );
};

export default NavBar;
