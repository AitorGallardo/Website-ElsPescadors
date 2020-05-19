import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import GoogleMap from "../components/map"


const Contact = () => {
  const address = {
    lat: 41.6219555,
    lng: 2.6930781
  }
  console.log('apikey', process.env.MAPS_APIKEY)
  return (
    <div>
      <SEO title="Contacte" />
      <Header />
      <div>
        <GoogleMap address={address} googleMapsApiKey={process.env.MAPS_APIKEY} />
        <div className="info-container" style={{ display: 'flex', justifyContent: 'center', padding: '40px', paddingBottom:'100px' }}>
          <div className="info-grid" style={{ display: `grid`, gridTemplateColumns: `300px 300px` }}>
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