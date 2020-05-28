import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import SEO from "../../components/seo"
import menu_ESP_1 from "../../images/menus/menu_ESP_1.jpg"
import menu_ESP_2 from "../../images/menus/menu_ESP_2.jpg"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"


const MenuEsp = () => (
  <div>
    <SEO title="Carta" />
    <Header mainId="menu" />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <LanguageNav selected="esp"/>
      <div>
        <ModalImage
          small={menu_ESP_1}
          large={menu_ESP_1}
          hideZoom={true}
          alt="Carta 1/2"
        />
        <ModalImage
          small={menu_ESP_2}
          large={menu_ESP_2}
          hideZoom={true}
          alt="Carta 2/2"
        />
      </div>
    </div>
    <Footer />
  </div>
)

export default MenuEsp
