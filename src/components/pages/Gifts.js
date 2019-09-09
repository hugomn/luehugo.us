import React from "react";
import PropTypes from "prop-types";
import Layout from "../layout";
import { FormattedMessage } from "react-intl";
import H2 from "../H2";
import Subtitle from "../Subtitle";
import styled from "styled-components";
import { flexbox, layout, space } from "styled-system";
import BtnLink from "../BtnLink";

const Gifts = props => {
  return (
    <Layout location={props.location}>
      <H2 textAlign="center">
        <FormattedMessage id="gifts.title">{txt => <span>{txt}</span>}</FormattedMessage>
      </H2>
      <Subtitle>
        Nosso maior presente será poder celebrar esse momento tão especial com nossos amados familiares e amigos. E além
        disso, nós moramos atualmente em Berlim, o que dificulta trazer qualquer presente na mala. Sendo assim,
        criaremos uma campanha de financiamento colaborativo, onde mostraremos exatamente o valor que arracadamos, e
        oferecemos também a opção de nos presentear com alguma experiência ou algo do nosso dia-a-dia.
      </Subtitle>
      <Container display="flex" flexDirection="row" justifyContent="space-around" mt={4} mx={3}>
        <Column flexBasis="50%">
          <h3>Lista de presentes</h3>
          <Img src={"/img/gifts.svg"} mt={3} />
          <BtnLink mt={4}>Ver lista de presentes</BtnLink>
        </Column>
        <Column flexBasis="50%">
          <h3>Financiamento colaborativo</h3>
          <Img src={"/img/crowdfunding.svg"} mt={3} />
          <BtnLink mt={4} to={"/crowdfunding"}>Participar da campanha</BtnLink>
        </Column>
      </Container>
      {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="KHA4STBGNH7DE" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form> */}
    </Layout>
  );
};

const Container = styled.section`
  ${flexbox};
  ${layout};
  ${space};
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  ${flexbox};
  ${layout};
  ${space};
`;

const Img = styled.img`
  ${space};
`;

Gifts.propTypes = {
  location: PropTypes.object.isRequired
};

export default Gifts;
