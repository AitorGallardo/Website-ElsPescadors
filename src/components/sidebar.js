import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css"
import { Link } from "gatsby"
import home_icon from "../icons/navbar/home_icon.svg"
import about_us_icon from "../icons/navbar/about_us_icon.svg"
import menu_icon from "../icons/navbar/menu_icon.svg"
import contact_icon from "../icons/navbar/contact_icon.svg"
import {Link as ReactScrollLink} from "react-scroll"

const ListLink = props => (
    <li >
        <Link to={props.to} style={{ display: `flex`, alignItems: 'center' }}>
            <img style={{ marginRight: '25px' }} id="menu-icon" src={props.icon_src} alt={props.icon_alt} widt="20px" height="20px" />
            <div style={{borderBottom: props.underline ? '2px solid #0080fc' : 'none'}}>{props.children}</div>
        </Link>
    </li>
)
const ScrollLink = props => (
    <li >
        <ReactScrollLink to={props.to} smooth={true} duration={1000} style={{ display: `flex`, alignItems: 'center' }}>
            <img style={{ marginRight: '25px' }} id="menu-icon" src={props.icon_src} alt={props.icon_alt} widt="20px" height="20px" />
            <div style={{borderBottom: props.underline ? '2px solid #0080fc' : 'none'}}>{props.children}</div>
        </ReactScrollLink>
    </li>
)

export default class SideBar extends React.Component {
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
            this.setState({ open: state.isOpen })
        }
    };

    render() {
        return (
            <div id="sidebar-cont">
                <Menu right isOpen={this.state.open} onStateChange={this.isMenuOpen}>
                {this.props.underline === "home" ? (<ListLink to="/" underline={true} icon_src={home_icon} icon_alt="Home Icon">Inici</ListLink>):
                    (<ListLink to="/" icon_src={home_icon} icon_alt="Home Icon">Inici</ListLink>)}
                {this.props.underline === "about" ? (<ScrollLink to="about" underline={true} icon_src={about_us_icon} icon_alt="About Icon">Nosaltres</ScrollLink>):
                    (<ScrollLink to="about" icon_src={about_us_icon} icon_alt="About Icon">Nosaltres</ScrollLink>)}
                {this.props.underline === "menu" ? (<ListLink to="/menu/cat" underline={true} icon_src={menu_icon} icon_alt="Menu Icon">Carta</ListLink>):
                    (<ListLink to="/menu/cat" icon_src={menu_icon} icon_alt="Menu Icon">Carta</ListLink>)}
                {this.props.underline === "contact" ? (<ScrollLink to="contact" underline={true} icon_src={contact_icon} icon_alt="Contact Icon">Contacte</ScrollLink>):
                    (<ScrollLink to="contact" icon_src={contact_icon} icon_alt="Contact Icon">Contacte</ScrollLink>)}
                </Menu>
            </div>
        );
    }
}