import React from "react";
import Page from "../../components/pages/Page";

const i18n = {
  titleId: "about",
  content: (
    <>
      <p>Olá!</p>
      <p>Bem-vindo ao site do nosso casamento! ❤️</p>
    </>
  ),
  description: `
    Lunara e Hugo - 02/05/2020.
  `
};

export default props => <Page i18n={i18n} {...props} />;
