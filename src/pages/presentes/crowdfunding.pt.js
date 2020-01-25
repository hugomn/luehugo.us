import React from "react";
import { graphql } from "gatsby";
import Crowdfunding from "../../components/pages/Crowdfunding";
import Layout from "../../components/layout";

export default props => (
  <Layout location={props.location} backgroundColor="lightColors.1">
    <Crowdfunding {...props} />
  </Layout>
);

export const pageQuery = graphql`
  query CrowdfundingPtQuery {
    site {
      siteMetadata {
        author {
          name
          homeCity
          email
          bio
          defaultLink
        }
        wedding {
          date
          fundingGoal
          fundingPledged
        }
      }
    }
    rewards: allRewardsPtYaml {
      edges {
        node {
          id
          description
          bbId
          paypalId
          price
          total
          sold
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
