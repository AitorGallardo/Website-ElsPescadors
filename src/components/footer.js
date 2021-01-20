import React from "react"
import '../assets/styles/components/footer.css'
import { Link } from "gatsby"
import social_facebook from "../assets/icons/social_facebook.svg"
import social_instagram from "../assets/icons/social_instagram.svg"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='grid-container'>
                    <div id="schedule">
                        <h4>Horari</h4>
                        <div id="schedule-contaier">
                            <p>De 10:00h a 00:00h</p>
                            <p id="schedule-big-field">Tots els dies de la setmana</p>
                        </div>
                    </div>
                    <div id="contact-footer">
                        <h4>Dades de Contacte</h4>
                        <address id="contact-footer">
                            <p>937 62 63 99</p>
                            <p>Platja, 08397 Pineda de Mar, Barcelona</p>
                        </address>
                    </div>
                    <div id="legal">
                        <h4>Assumptes legals</h4>
                        <Link className="link-style" to="cookies-policy">Política de cookies</Link>
                    </div>
                    <div id="social">
                        <h4>Segueix-nos a Xarxes</h4>
                        <div id="social-container">
                            <a href="https://www.facebook.com/elspescadorsdepinedademar/"><img src={social_facebook} alt="Social Facebook Icon" widt="24px" height="24px" /></a>
                            <a href="cookies-policy" style={{ marginLeft: '10px' }}><img src={social_instagram} alt="Social Instagram Icon" widt="24px" height="24px" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer