import React from "react";
import Index from "../components/pages/Index";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default props => <Layout location={props.location}><Index {...props} /></Layout>;

export const pageQuery = graphql`
  query IndexEn {
    timeline: allTimelineEnYaml {
      edges {
        node {
          name
          date(formatString: "MMMM, YYYY", locale: "en-US")
          description
        }
      }
    }
    groomsmen: allGroomsmenEnYaml(sort: { fields: name }) {
      edges {
        node {
          name
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
    bridesmaids: allBridesmaidsEnYaml(sort: { fields: name }) {
      edges {
        node {
          name
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
    announcement: file(relativePath: { eq: "images/announcement_en.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
      publicURL
    }
  }
`;
