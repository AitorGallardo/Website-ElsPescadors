
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, Link, graphql } from "gatsby"
import Image from "../components/image"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


function Header({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <header>
        <div style={{ display:`grid`, gridTemplateColumns: `300px auto` }}>
          <Link to="/" style={{ textShadow: `none` }}>
            <div style={{ maxWidth: `300px`, alignSelf: 'center'}}>
              <Image name="elspescadors-icon.png"/>
            </div>
          </Link>
          <ul style={{margin: `0px`, alignSelf: `center`, justifySelf: `end`}}>
            <ListLink to="/">Inici</ListLink>
            <ListLink to="/about">Nosaltes</ListLink>
            <ListLink to="/menu/cat">Carta</ListLink>
            <ListLink to="/contact">Contacte</ListLink>
          </ul>
        </div>
      </header>
      {children}
    </div>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
