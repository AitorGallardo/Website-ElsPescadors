import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import LanguageNav from "../../components/language_nav"
import MenuLayout from "../../components/menuLayout"
import ModalImage from "react-modal-image";

const MenuNl = () => {

  const data = useStaticQuery(graphql`
    query getNlImages {
      allFile(filter: {relativeDirectory: {eq: "menus"}, name: {regex: "/NL/"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1800) {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
    `)

    let menuImage = null;
    let suggestionsImage = null;
  
    const options = {
      menuName:'Menu',
      suggestionsName:'Suggesties',
      imgAlt:'Menukaart',
    }
  
    data.allFile.edges.map(({node})=>{
      if(node.base.includes('menu')){
        menuImage = node.childImageSharp.fluid.src;
      }else{
        suggestionsImage = node.childImageSharp.fluid.src;
      }
    })
  return (
    <div>
      <MenuLayout>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LanguageNav selected="nl" />
          <ModalImage className="menu-image"
            small={menuImage}
            large={menuImage}
            hideZoom={true}
            alt={options.menuName}
          />
        </div>
      </MenuLayout>
    </div>
  )
}
export default MenuNl
