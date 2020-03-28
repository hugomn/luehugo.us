import React from "react";
import Index from "../components/pages/Index";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default props => <Layout location={props.location}><Index {...props} /></Layout>;

export const pageQuery = graphql`
  query IndexPt {
    timeline: allTimelinePtYaml {
      edges {
        node {
          name
          date(formatString: "MMMM [de] YYYY", locale: "pt-BR")
          description
        }
      }
    }
    groomsmen: allGroomsmenPtYaml(sort: { fields: name }) {
      edges {
        node {
          name
          description
          image {
            childImageSharp {
              sizes(maxWidth: 750) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
    bridesmaids: allBridesmaidsPtYaml(sort: { fields: name }) {
      edges {
        node {
          name
          description
          image {
            childImageSharp {
              sizes(maxWidth: 750) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
    announcement: file(relativePath: { eq: "images/announcement_pt.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
      publicURL
    }
  }
`;
