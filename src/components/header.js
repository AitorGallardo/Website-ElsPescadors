
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, Link, graphql } from "gatsby"
import Image from "../components/image"
import "./header.css"
import menu_icon from "../icons/menu_icon.svg"
import SideBar from "./sidebar.js"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, borderBottom: props.underline ? '2px solid black' : 'none' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false
    };

    this.toggleChildMenu = this.toggleChildMenu.bind(this);
  }

  toggleChildMenu() {
    this.setState(state => ({
      isSidebarOpen: true
    }));
  }
  render() {
    return (
      <div>
        <header id="container">
          <SideBar id="sidebar" underline={this.props.underline} open={this.state.isSidebarOpen} pageWrapId={"page-wrap"} outerContainerId={"container"} />
          <nav>
            <Link to="/" style={{ textShadow: `none` }}>
              <div>
                <Image name="elspescadors-icon.png" />
              </div>
            </Link>
            <img onClick={this.toggleChildMenu} id="menu-icon" src={menu_icon} alt="Menu Icon" widt="24px" height="24px" />
            <ul>
              {this.props.underline === "home" ? (<ListLink to="/" underline={true}>Inici</ListLink>):(<ListLink to="/">Inici</ListLink>)}
              {this.props.underline === "about" ? (<ListLink to="/about" underline={true}>Nosaltres</ListLink>):(<ListLink to="/about">Nosaltres</ListLink>)}
              {this.props.underline === "menu" ? (<ListLink to="/menu/cat" underline={true}>Carta</ListLink>):(<ListLink to="/menu/cat">Carta</ListLink>)}
              {this.props.underline === "contact" ? (<ListLink to="/contact" underline={true}>Contacte</ListLink>):(<ListLink to="/contact">Contacte</ListLink>)}
            </ul>
          </nav>
        </header>
      </div>
    );
  }

}


export default Header
