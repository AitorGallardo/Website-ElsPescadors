import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"
import MenuLayout from "../../components/menuLayout"
import MenuSuggestions from "../../components/menuSuggestions"

const MenuEsp = () => {
  const data = useStaticQuery(graphql`
    query getEspImages {
      allFile(filter: {relativeDirectory: {eq: "menus"}, name: {regex: "/ESP/"}}) {
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

    let image1 = null
    let image2 = null
    let suggestionsImage = null;
  
    const options = {
      menuName:'Menú',
      suggestionsName:'Sugerencias',
      imgAltMenu:'Carta',
      imgAltWine:'Carta de Vinos',
      isWine:'Vinos'
    }
  
    data.allFile.edges.map(({node})=>{
      if(node.base.includes('menu')){
        image1 = node.childImageSharp.fluid.src;
      }else if(node.base.includes('vins')){
        image2 = node.childImageSharp.fluid.src;
      }else{
        suggestionsImage = node.childImageSharp.fluid.src;
      }
    })
  

  return(
  <>
    <MenuLayout>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <LanguageNav selected="esp"/>
      <MenuSuggestions menuImage1={image1} menuImage2={image2} suggestionsImage={suggestionsImage} options={options}/>
    </div>
      </MenuLayout>
  </>
)}

export default MenuEsp
