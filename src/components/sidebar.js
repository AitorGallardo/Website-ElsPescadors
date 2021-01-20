import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "../assets/styles/components/sidebar.css"
import { Link } from "gatsby"
import home_icon from "../assets/icons/navbar/home_icon.svg"
import about_us_icon from "../assets/icons/navbar/about_us_icon.svg"
import menu_icon from "../assets/icons/navbar/menu_icon.svg"
import contact_icon from "../assets/icons/navbar/contact_icon.svg"
import { Link as ReactScrollLink } from "react-scroll"

const ListLink = props => (
    <li >
        <Link to={props.to} style={{ display: `flex`, alignItems: 'center' }} onClick={()=>setScrollId(props.scrollId)}>
            <img style={{ marginRight: '25px' }} id="menu-icon" src={props.icon_src} alt={props.icon_alt} widt="20px" height="20px" />
            <div style={{ borderBottom: props.underline ? '2px solid #262626' : 'none' }}>{props.children}</div>
        </Link>
    </li>
)
const ScrollLink = props => {
    const [isLinkActive, setLinkActive] = useState(false);
    return (
        <li >
            <ReactScrollLink to={props.to} spy={true} onSetActive={() => { setLinkActive(true) }} onSetInactive={() => setLinkActive(false)} smooth={true} duration={1000} style={{ display: `flex`, alignItems: 'center' }}>
                <img style={{ marginRight: '25px' }} id="menu-icon" src={props.icon_src} alt={props.icon_alt} widt="20px" height="20px" />
                <div style={{ paddingBottom: '2px', borderBottom: isLinkActive ? '2px solid #262626' : '2px solid transparent' }}>{props.children}</div>
            </ReactScrollLink>
        </li>
    )
}

const setScrollId = (id)=>{
      // On build protection
  if (typeof window !== `undefined`) {
    window.scrollOnRoutingId = id;
  } 
  }
  

const LinksForHomePage = props => (
    <>
        <ScrollLink to="home-top-side" icon_src={home_icon} icon_alt="Home Icon">Inici</ScrollLink>
        <ScrollLink to="about" icon_src={about_us_icon} icon_alt="About Icon">Nosaltres</ScrollLink>
        <ListLink to="/menu/cat" icon_src={menu_icon} icon_alt="Menu Icon">Carta</ListLink>
        <ScrollLink to="contact" icon_src={contact_icon} icon_alt="Contact Icon">Contacte</ScrollLink>
    </>
);
const LinksForMenuPage = props => (
    <>
        <ListLink to="/" icon_src={home_icon} icon_alt="Home Icon">Inici</ListLink>
        <ListLink to="/" icon_src={about_us_icon} scrollId="about" icon_alt="About Icon">Nosaltres</ListLink>
        <ListLink to="/menu/cat" underline={true} icon_src={menu_icon} icon_alt="Menu Icon">Carta</ListLink>
        <ListLink to="/" icon_src={contact_icon} scrollId="contact" icon_alt="Contact Icon">Contacte</ListLink>
    </>
);

export default class SideBar extends React.Component {

    active = 'home'

    constructor(props) {
        super(props);
        this.state = {
            open: props.open
        };
        this.isMenuOpen = this.isMenuOpen.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open })
    }
    isMenuOpen = function (state) {
        if (!state.isOpen) {
            this.props.onClickClose('lal');
            this.setState({ open: state.isOpen })
        }
    };

    render() {
        return (
            <div id="sidebar-cont">
                <Menu right isOpen={this.state.open} onStateChange={this.isMenuOpen}>
                   {this.props.mainId === 'home' ? (<LinksForHomePage/>):(<LinksForMenuPage/>)}
                </Menu>
            </div>
        );
    }
}