import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css"
import { Link } from "gatsby"
import home_icon from "../icons/navbar/home_icon.svg"
import about_us_icon from "../icons/navbar/about_us_icon.svg"
import menu_icon from "../icons/navbar/menu_icon.svg"
import contact_icon from "../icons/navbar/contact_icon.svg"

const ListLink = props => (
    <li >
        <Link to={props.to} style={{ display: `flex`, alignItems: 'center' }}>
            <img style={{ marginRight: '25px' }} id="menu-icon" src={props.icon_src} alt={props.icon_alt} widt="20px" height="20px" />
            <div style={{borderBottom: props.underline ? '2px solid black' : 'none'}}>{props.children}</div>
        </Link>
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
                {this.props.underline === "about" ? (<ListLink to="/about" underline={true} icon_src={about_us_icon} icon_alt="About Icon">Nosaltres</ListLink>):
                    (<ListLink to="/about" icon_src={about_us_icon} icon_alt="About Icon">Nosaltres</ListLink>)}
                {this.props.underline === "menu" ? (<ListLink to="/menu/cat" underline={true} icon_src={menu_icon} icon_alt="Menu Icon">Menu</ListLink>):
                    (<ListLink to="/menu/cat" icon_src={menu_icon} icon_alt="Menu Icon">Menu</ListLink>)}
                {this.props.underline === "contact" ? (<ListLink to="/contact" underline={true} icon_src={contact_icon} icon_alt="Contact Icon">Contact</ListLink>):
                    (<ListLink to="/contact" icon_src={contact_icon} icon_alt="Contact Icon">Contact</ListLink>)}
                </Menu>
            </div>
        );
    }
}