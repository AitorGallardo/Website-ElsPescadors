import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css"


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
            <Menu right isOpen={this.state.open} onStateChange={this.isMenuOpen}>
                <a className="menu-item" href="/">
                    Home
        </a>

                <a className="menu-item" href="/burgers">
                    Burgers
        </a>

                <a className="menu-item" href="/pizzas">
                    Pizzas
        </a>

                <a className="menu-item" href="/desserts">
                    Desserts
        </a>
            </Menu>
        );
    }
}