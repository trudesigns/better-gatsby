module.exports = {
  siteMetadata: {
    title: 'Good Gatsby',
    desc: 'great book... read it'
  },
  plugins: ['gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
