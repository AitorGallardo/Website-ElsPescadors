import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import SEO from "../../components/seo"
import menu_DE from "../../images/menus/menu_DE.jpg"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"

const MenuDe = () => (
  <div>
    <SEO title="Carta" />
    <Header underline="menu" />
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
      <LanguageNav />
      <ModalImage
        small={menu_DE}
        large={menu_DE}
        alt="De Menu"
      />
    </div>
    <Footer />
  </div>
)

export default MenuDe
