 module.exports = {
     siteMetadata: {
         title: "COTA'S KITCHEN",
         author: "Seiya Kotaki"
     },
     plugins: [
         'gatsby-plugin-sass',
         {
             resolve: "gatsby-source-filesystem",
             options: {
                 name: "src",
                 path: `${__dirname}/src/`,
             },
         },
         "gatsby-transformer-remark",
     ],
 }