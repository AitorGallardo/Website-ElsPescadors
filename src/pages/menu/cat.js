import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"
import MenuLayout from "../../components/menuLayout"



const MenuCat = () => {
  const data = useStaticQuery(graphql`
  query getCatImages {
    allFile(filter: {relativeDirectory: {eq: "menus"}, name: {regex: "/CAT/"}}) {
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

  data.allFile.edges.map(({node})=>{
    if(node.base.includes('1')){
      image1 = node.childImageSharp.fluid.src;
    }else{
      image2 = node.childImageSharp.fluid.src;
    }
  })

  return(
  <>
    <MenuLayout>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <LanguageNav selected="cat"/>
      <div>
        <ModalImage
          small={image1}
          large={image1}
          hideZoom={true}
          alt="Carta 1/2"
        />
        <ModalImage
          small={image2}
          large={image2}
          hideZoom={true}
          alt="Carta 2/2"
        />
      </div>
    </div>
      </MenuLayout>
  </>
)}

export default MenuCat
