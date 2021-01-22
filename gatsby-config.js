let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

// Related to 'gatsby-plugin-robots-txt' whick will avoid netlify's preview.
/** If you are using Netlify, you might end up deploying many versions of your website. Preview versions might be deployed on each pull-request. 
 * One of those versions might end up behind found by Google. And that’s how your website gets sanctioned for “duplicate content”. */
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://elspescadorspinedademar.cat',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Els Pescadors`,
    description: `Restaurant Mediterrani`,
    author: `ElsPescadors`,
    keywords: ['els pescadors','els pescadors pineda de mar', 'pineda de mar', 'restaurant els pescadors', 'restaurant pineda'],
    siteUrl
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
