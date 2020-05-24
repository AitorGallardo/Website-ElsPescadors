import React from 'react';
import { Link } from "gatsby"
import "./language_nav.css"
import cat_flag from "../icons/flags/cat_flag.svg"
import esp_flag from "../icons/flags/esp_flag.svg"
import eng_flag from "../icons/flags/eng_flag.svg"
import ita_flag from "../icons/flags/ita_flag.svg"
import fr_flag from "../icons/flags/fr_flag.svg"
import de_flag from "../icons/flags/de_flag.svg"
import nl_flag from "../icons/flags/nl_flag.svg"
import ru_flag from "../icons/flags/ru_flag.svg"

const flagStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -100%)"
};

const LanguageNav = (props) => {
    const { color, name, id } = props;
    return (
        <div className="nav-container">
            <nav className="languages-nav">
                <Link to="/menu/cat" className="link-icon">
                    <img id="flag-icon" src={cat_flag} alt="Cat flag" widt="32px" height="32px" />
                </Link>
                <Link to="/menu/esp" className="link-icon">
                    <img id="flag-icon" src={esp_flag} alt="Esp flag" widt="32px" height="32px" />
                </Link>
                <Link to="/menu/eng" className="link-icon">
                    <img id="flag-icon" src={eng_flag} alt="Eng flag" widt="32px" height="32px" />
                </Link>
                <Link to="/menu/ita" className="link-icon">
                    <img id="flag-icon" src={ita_flag} alt="Ita flag" widt="32px" height="32px" />
                </Link>
                <Link to="/menu/fr" className="link-icon">
                    <img id="flag-icon"src={fr_flag} alt="Fr flag" widt="32px" height="32px" />
                </Link>
                <Link to="/menu/de" className="link-icon">
                    <img id="flag-icon" src={de_flag} alt="De flag" widt="32px" height="32px" />
                </Link>
                <Link to="/menu/nl" className="link-icon">
                    <img id="flag-icon" src={nl_flag} alt="Nl flag" widt="32px" height="32px" />
                </Link>
                <Link to="/menu/ru" className="link-icon">
                    <img id="flag-icon"src={ru_flag} alt="Ru flag" widt="32px" height="32px" />
                </Link>
            </nav>
        </div>
    );
};

export default LanguageNav;