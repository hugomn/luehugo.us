import React from "react";
import { graphql } from "gatsby";
import Rsvp from "../components/pages/Rsvp";

export default props => <Rsvp {...props} />;

export const pageQuery = graphql`
  query RsvpPtQuery {
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
