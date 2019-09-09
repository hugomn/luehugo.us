import React from "react";
import { graphql } from "gatsby";
import Crowdfunding from "../components/pages/Crowdfunding";

export default props => <Crowdfunding {...props} />;

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
        },
        wedding {
          date
          fundingGoal
          fundingPledged
        }
      }
    }
  }
`;
