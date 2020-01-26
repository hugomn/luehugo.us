import React from "react";
import Rsvp from "../../components/pages/Rsvp";
import Layout from "../../components/layout";

export default props => (
  <Layout location={props.location} backgroundColor="lightColors.1">
    <Rsvp {...props} langKey="pt" />
  </Layout>
);
