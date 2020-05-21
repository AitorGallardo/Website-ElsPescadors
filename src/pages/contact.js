import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import GoogleMap from "../components/map"
import './contact.css'


const Contact = () => {
  const address = {
    lat: 41.6219555,
    lng: 2.6930781
  }
  return (
    <div>
      <SEO title="Contacte" />
      <Header underline = "contact"/>
      <div>
        <GoogleMap address={address} googleMapsApiKey={process.env.GATSBY_MAPS_APIKEY} />
        <div className="info-container">
          <div className="info-grid">
            <div>
              <h2>Horari</h2>
              <p>Tots els dies de la setmana</p>
              <p>De 10:00 h a 16:30h</p>
              <p>De 19:45h a 23:30h</p>
            </div>
            <div>
              <h2>Com contactar</h2>
              <p>932 000 000</p>
              <p>contactme@elspescadors.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}
export default Contact
