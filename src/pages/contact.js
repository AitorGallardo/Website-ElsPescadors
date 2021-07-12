import React from "react"
import GoogleMap from "../components/map"
import '../assets/styles/pages/contact.css'


const Contact = () => {
  const address = {
    lat: 41.6219555,
    lng: 2.6930781
  }
  return (
    <div>
      <div className={`contact-container pages-top-zone`} id="contact">
        <GoogleMap address={address} googleMapsApiKey={process.env.GATSBY_MAPS_APIKEY} />
        <div className="info-container">
          <div className="info-grid">
            <div>
              <h2>Horari</h2>
              <p>Tots els dies de la setmana</p>
              <p>De 9:00h a 00:00h</p>
            </div>
            <div>
              <h2>Com contactar</h2>
              <p>937 62 63 99</p>
              <p>Platja, 08397 Pineda de Mar, Barcelona</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Contact
