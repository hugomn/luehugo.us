import React from "react";
import Gifts from "../components/pages/Gifts";
import { graphql } from "gatsby";

export default props => <Gifts {...props} />;

export const pageQuery = graphql`
  query GiftsPtQuery {
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
