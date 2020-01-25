import React from "react";
import Index from "../components/pages/Index";
import { graphql } from "gatsby";

export default props => <Index {...props} />;

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
  }
`;
