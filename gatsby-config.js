const siteMetadata = require("./src/data/siteMetadata");

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-figure-caption`,
            options: { figureClassName: "md-figure" }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 740
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-16818992-1"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hugo Nogueira",
        short_name: "Hugo Nogueira",
        icons: [
          {
            src: "/img/logo.svg",
            sizes: "any",
            type: "image/svg+xml"
          }
        ],
        start_url: "/",
        background_color: "white",
        theme_color: "white",
        display: "minimal-ui"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap"
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "pt",
        langKeyDefault: "pt",
        useLangKeyLayout: true,
        prefixDefault: false,
        markdownRemark: {
          postPage: "src/templates/blog-post.js",
          query: `
          {
              allMarkdownRemark {
                  edges {
                  node {
                      fields {
                      slug,
                      langKey
                      }
                  }
                  }
              }
          }
          `
        }
      }
    },
    {
      resolve: "gatsby-plugin-i18n-tags",
      options: {
        // Default options
        tagPage: "src/templates/tag-page.js",
        tagsUrl: "/tags/",
        langKeyForNull: "pt",
        langKeyDefault: "pt",
        prefixDefault: false
      }
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Allura`,
            subsets: [`latin`],
            variants: [`400`]
          },
          {
            family: `Poppins`,
            subsets: [`latin`, `latin-ext`],
            variants: [`300`, `400`, `500`, `700`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-yaml-plus`,
      options: {
        enableRemark: true,
        markdownPreface: "md//"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: "yaml"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        disable: true
      }
    }
  ]
};
