module.exports = {
  siteMetadata: {
    title: "Crazy MTB World",
    author: "Slawomir Dyk",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOrginal: false,
            },
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms",
  ],
}
