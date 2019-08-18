import React from "react";
import SaveTheDate from "../components/pages/SaveTheDate";
import { graphql } from "gatsby";

export default props => <SaveTheDate {...props} />;

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "images/card_en.png" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
      publicURL
    }
  }
`;
