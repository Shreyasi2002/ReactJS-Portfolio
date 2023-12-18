import React, { useEffect } from "react";
import { useLocation } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "./Links.styled";

import { Link } from "react-scroll";

import "./Navs.css";

import ScrollReveal from "scrollreveal";

var LINKS = [
    { to: "/#about", text: "About", inside: true, to1: "about" },
    { to: "/experience", text: "Experience", inside: false},
    { to: "/#publications", text: "Publications", inside: true, to1: "publications" },
    { to: "/projects", text: "Projects", inside: false },
    { to: "/#testimonials", text: "Testimonials", inside: true, to1: "testimonials"},
    { to: "/resume", text: "Resume", inside: false },
    { to: "/contact", text: "Contact", inside: false },
];

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    // document.getElementById("icon-menu").onclick = closeNav();
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    // document.getElementById("icon-menu").onclick = openNav();
}


const Navs = () => {
    const location = useLocation();
    const changeCss = () => {
        // console.log(window.scrollY);
        if (window.scrollY > 200 || location.pathname !== "/") {
            // console.log("inside")
            document.getElementById("nav-header").style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            document.getElementById("nav-header").style.background = "transparent";
        }
      };
    
    useEffect(() => {
        window.addEventListener("scroll", changeCss);
    });
    

    const config = {
        reset: false,
        distance: '60px',
        duration: 1000,
        delay: 50,
        origin: 'top',
        easing: 'ease-in',
    };
    ScrollReveal(config);
    

    return (
      <header>
            <div id="myNav" className="overlay" onClick={closeNav}>
            {/* <FontAwesomeIcon icon={faXmark} size="2x" onClick={closeNav} className="font-close"/> */}
          <ul className="overlay-content">
                    {LINKS.map((item) => (
                        item.inside ?
                            <li key={item.to}>
                                <>
                                <NavLink onClick={closeNav} to={item.to}>{item.text}</NavLink>
                                    </>   
                  </li>:
              <li key={item.to}>
                    <NavLink to={item.to}>{item.text}</NavLink>
              </li>
              
            ))}
          </ul>
            </div>
            <div className="nav-header" id="nav-header">
        <nav className="navigation">
                    <NavLink to="/#home">
                        <img src='/Images/logo.png' alt="logo" className="logo" id="website-logo" />
                    </NavLink>
            <NavLink to="/#home"><img src='/Images/logo-blue.png' alt="logo" className="logo-hover" /></NavLink>
          <ul className="nav-items">
                        {LINKS.map((item) => (
                item.inside ?
                            <li key={item.to}>
                                    <><NavLink to={item.to}>{item.text}</NavLink>
                                        <Link
                            activeClass="active"
                            to={item.to1}
                            // spy={true}
                            smooth={true}
                            // offset={-70}
                            duration={500}
                        >    
                            </Link>  </> 
                  </li>:
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={item.to === location.pathname ? "active" : ""}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
                        <li className="icon-menu" id="icon-menu">
                        <FontAwesomeIcon icon={faBars} size="2x" onClick={openNav} className="font-open" />
                        </li>
            </ul>
                </nav>
                </div>
      </header>
    );
};
  
export default Navs;
