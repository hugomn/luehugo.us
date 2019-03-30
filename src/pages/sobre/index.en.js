import React from "react";
import Page from "../../components/pages/Page";

const i18n = {
  titleId: "about",
  content: (
    <>
      <p>Hello!</p>
      <p>Welcome to our wedding website</p>
    </>
  ),
  description: `
    Lunara and Hugo - 02/05/2020
  `
};

export default props => <Page i18n={i18n} {...props} />;
