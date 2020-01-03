import React from "react";
import GiftsList from "../../components/pages/GiftsList";
import { graphql } from "gatsby";

export default props => <GiftsList {...props} />;

export const pageQuery = graphql`
  query ListaPtQuery {
    allGiftsYaml {
      edges {
        node {
          id
          name
          price
          total
          sold
          image {
            childImageSharp{
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
