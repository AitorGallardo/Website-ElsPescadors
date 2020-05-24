import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import SEO from "../../components/seo"
import menu_RU from "../../images/menus/menu_RU.jpg"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"

const MenuRu = () => (
  <div>
    <SEO title="Carta" />
    <Header underline="menu" />
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
      <LanguageNav selected="ru"/>
      <ModalImage className="menu-image"
        small={menu_RU}
        large={menu_RU}
        hideZoom={true}
        alt="меню"
      />
    </div>
    <Footer />
  </div>
)

export default MenuRu
