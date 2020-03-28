import React from "react";
import Announcement from "../../components/pages/Announcement";
import Layout from "../../components/layout";

export default props => (
  <Layout location={props.location} backgroundColor="lightColors.1">
    <Announcement {...props} langKey="en" />
  </Layout>
);
