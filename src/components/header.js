
import React, { Fragment, useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, Link, graphql } from "gatsby"
import { animateScroll, Link as ReactScrollLink } from "react-scroll"
import Image from "../components/image"
import "./header.css"
import menu_icon from "../icons/menu_icon.svg"
import SideBar from "./sidebar"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, borderBottom: props.underline ? '2px solid #0080fc' : 'none' }} onClick={()=>setScrollId(props.scrollId)}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const ScrollLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, cursor: 'pointer' }}>
    <ReactScrollLink activeClass="activeLinkClass" to={props.to} smooth={true} duration={1000} spy={true}>{props.children}</ReactScrollLink>
  </li>
)
const setScrollId = (id)=>{
  window.scrollOnRoutingId = id;
}

const LinksForHomePage = props => (
  <ul>
    <ScrollLink to="home-top-side">Inici</ScrollLink>
    <ScrollLink to="about">Nosaltres</ScrollLink>
    <ListLink to="/menu/cat">Carta</ListLink>
    <ScrollLink to="contact">Contacte</ScrollLink>
  </ul>
)
const LinksForMenuPage = props => {
  return(
  <ul>
    <ListLink to="/">Inici</ListLink>
    <ListLink to="/" scrollId="about">Nosaltres</ListLink>
    <ListLink to="/menu/cat" underline={true}>Carta</ListLink>
    <ListLink to="/" scrollId="contact">Contacte</ListLink>
  </ul>
)}

const Header = (props) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(Math.abs(ref.current.getBoundingClientRect().top) >= (window.innerHeight - (window.innerHeight / 10)));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);


  return (
    <div className={`sticky-container${isSticky ? ' sticky' : ''}`} ref={ref}>
      <header className="sticky-content" id="container" >
        {/* <SideBar id="sidebar" mainId={props.mainId} underline={props.underline} open={isSidebarOpen} onClickClose={(e) => setSidebar(false)} pageWrapId={"page-wrap"} outerContainerId={"container"} /> */}
        <nav>
          <div style={{ cursor: 'pointer' }} onClick={() => animateScroll.scrollToTop()}>
            <Image name="elspescadors-icon.png" />
          </div>
          <img onClick={props.toggleSidebar} id="menu-icon" src={menu_icon} alt="Menu Icon" widt="24px" height="24px" />
          {props.mainId === 'home' ? (<LinksForHomePage/>):(<LinksForMenuPage/>)}
        </nav>
      </header>
    </div>
  );

}


export default Header
