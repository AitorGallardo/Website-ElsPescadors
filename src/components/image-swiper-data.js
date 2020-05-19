import React from "react"
import { useStaticQuery, graphql } from "gatsby"


function extractData(){
    const data = useStaticQuery(graphql`
    query {
    allImageSharp {
        edges {
        node {
            id
            fluid(maxWidth: 700, maxHeight: 400) {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
    }`);
    return data;
}



export default extractData;