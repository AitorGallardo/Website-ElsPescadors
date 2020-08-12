import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"
import MenuLayout from "../../components/menuLayout"
import suggestionsImage from "../../images/menus/suggestions_nl.jpg"

const MenuNl = () => {




  const data = useStaticQuery(graphql`
  query {
    indexImage: file(relativePath: { eq: "menus/menu_NL.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid 
        }
      }
    }
  }
`)

const menuImageRef = data?.indexImage?.childImageSharp?.fluid?.src;
const suggestionsImageRef = suggestionsImage;

const [showSuggestions, setSuggestions] = useState(false);
const [image, setImage] = useState(data?.indexImage?.childImageSharp?.fluid?.src);


  return (
    <div>
      <MenuLayout>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LanguageNav selected="nl" />
          {showSuggestions ? <div className="menu-image-header" onClick={() => { setSuggestions(false); setImage(menuImageRef) }}>
            <div style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside', textDecoration: 'underline', fontStyle: 'italic', cursor: 'pointer' }}>Menu</div>
          </div> : <div className="menu-image-header" onClick={() => { setSuggestions(true); setImage(suggestionsImageRef); }}>
              <div style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside', textDecoration: 'underline', fontStyle: 'italic', cursor: 'pointer' }}>Suggesties</div>
            </div>}


          <ModalImage className="menu-image"
            small={image}
            large={image}
            hideZoom={true}
            alt="Menukaart"
          />
        </div>
      </MenuLayout>
    </div>
  )
}
export default MenuNl
