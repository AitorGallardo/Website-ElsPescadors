
import React, { Fragment, useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, Link, graphql } from "gatsby"
import {Link as ReactScrollLink} from "react-scroll"
import Image from "../components/image"
import "./header.css"
import menu_icon from "../icons/menu_icon.svg"
import SideBar from "./sidebar.js"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, borderBottom: props.underline ? '2px solid #0080fc' : 'none' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const ScrollLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, borderBottom: props.underline ? '2px solid #0080fc' : 'none', cursor: 'pointer' }}>
    <ReactScrollLink to={props.to} smooth={true} duration={1000}>{props.children}</ReactScrollLink>
  </li>
)

const Header = (props) => {
  const [isSticky, setSticky] = useState(false);
  const [isSidebarOpen, setSidebar] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
  
    if (ref.current) {
      setSticky(Math.abs(ref.current.getBoundingClientRect().top) >= window.innerHeight);     
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  

  const toggleChildMenu = () => {    
    setSidebar(true);
  }
    return (
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <header className="sticky-inner" id="container" >
          <SideBar id="sidebar" underline={props.underline} open={isSidebarOpen} onClickClose={(e)=> setSidebar(false)} pageWrapId={"page-wrap"} outerContainerId={"container"} />
          <nav>
            <Link to="/" style={{ textShadow: `none` }}>
              <div>
                <Image name="elspescadors-icon.png" />
              </div>
            </Link>
            <img onClick={toggleChildMenu} id="menu-icon" src={menu_icon} alt="Menu Icon" widt="24px" height="24px" />
            <ul>
              {props.underline === "home" ? (<ListLink to="/" underline={true}>Inici</ListLink>):(<ListLink to="/">Inici</ListLink>)}
              {props.underline === "about" ? (<ScrollLink to="about" underline={true}>Nosaltres</ScrollLink>):(<ScrollLink to="about">Nosaltres</ScrollLink>)}
              {props.underline === "menu" ? (<ListLink to="/menu/cat" underline={true}>Carta</ListLink>):(<ListLink to="/menu/cat">Carta</ListLink>)}
              {props.underline === "contact" ? (<ScrollLink to="contact" underline={true}>Contacte</ScrollLink>):(<ScrollLink to="contact">Contacte</ScrollLink>)}
            </ul>
          </nav>
        </header>
      </div>
    );
  
}


export default Header
