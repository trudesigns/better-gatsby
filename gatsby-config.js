module.exports = {
  siteMetadata: {
    title: 'Good Gatsby',
    desc: 'great book... read it',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ylccfpuaoa66',
        accessToken:
          '8f09f8fe149e1c070cc79a4ec27885a3fad29bd1422d71b32a786817937befb1',
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
  ],
}
