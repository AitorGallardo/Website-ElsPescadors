import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import SEO from "../../components/seo"
import carta_ENG from "../../assets/carta_ENG.pdf"


const MenuEng = () => (
  <div>
    <SEO title="Carta" />
    <Header underline="menu" />
    <h1>Menu</h1>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <embed src={carta_ENG} width="800px" height="2100px" />
    </div>
    <Footer />
  </div>
)

export default MenuEng
