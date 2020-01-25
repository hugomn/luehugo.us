import React from "react";
import GiftsList from "../../components/pages/GiftsList";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

export default props => (
  <Layout location={props.location} backgroundColor="lightColors.1">
    <GiftsList {...props} />
  </Layout>
);

export const pageQuery = graphql`
  query ListaPtQuery {
    gifts: allGiftsPtYaml {
      edges {
        node {
          id
          name
          bbId
          paypalId
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
