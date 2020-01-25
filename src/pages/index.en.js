import React from "react";
import Index from "../components/pages/Index";
import { graphql } from "gatsby";

export default props => <Index {...props} />;

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
  }
`;
