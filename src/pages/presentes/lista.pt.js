import React from "react";
import GiftsList from "../../components/pages/GiftsList";
import { graphql } from "gatsby";

export default props => <GiftsList {...props} />;

export const pageQuery = graphql`
  query ListaPtQuery {
    site {
      siteMetadata {
        author {
          name
          homeCity
          email
          bio
          defaultLink
        }
      }
    }
  }
`;
