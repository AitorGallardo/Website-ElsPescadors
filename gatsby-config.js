let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 
module.exports = {
  siteMetadata: {
    title: `Els Pescadors`,
    description: `Mediterranean Restaurant`,
    author: `ElsPescadors`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Restaurant Els Pescadors Pineda de mar`,
        short_name: `Els Pescadors`,
        start_url: `/`,
        background_color: `#0080fc`,
        theme_color: `#0080fc`,
        display: `minimal-ui`,
        icon: `src/assets/images/elspescadors-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
