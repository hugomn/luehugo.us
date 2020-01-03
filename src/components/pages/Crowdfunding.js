import React from "react";
import PropTypes from "prop-types";
import Layout from "../layout";
import { FormattedMessage, FormattedNumber } from "react-intl";
import H2 from "../H2";
import Subtitle from "../Subtitle";
import styled, { keyframes } from "styled-components";
import { flexbox, layout, space } from "styled-system";
import moment from "moment";
import PaypalButton from "../PaypalButton";
import Card from "../Card";

const Crowdfunding = props => {
  const { wedding } = props.data.site.siteMetadata;
  const days = moment(wedding.date).diff(new Date(), "days");
  const percentage = (wedding.fundingPledged / wedding.fundingGoal) * 100;
  return (
    <Layout location={props.location}>
      <H2 textAlign="center">
        <FormattedMessage id="crowdfunding.title">{txt => <span>{txt}</span>}</FormattedMessage>
      </H2>
      <Subtitle>
        <i>Crowdfunding</i> (ou Financiamento Colaborativo) é uma nova abordagem em que diversas pessoas, participando
        com pequenas contribuições, fazem um grande projeto acontecer. Considerando nosso contexto atual, e a nossa
        vontade de fazer um evento inesquecível, decidimos utilizar o crowdfunding como ferramenta.
      </Subtitle>
      <Container display="flex" flexDirection="row" justifyContent="space-around">
        <Column flexBasis="33%">
          <Number>{percentage}%</Number>
          <p>alcançados</p>
        </Column>
        <Column flexBasis="33%">
          <Number>
            R$ <FormattedNumber value={wedding.fundingPledged} minimumFractionDigits={2} />
          </Number>
          <p>
            de R$ <FormattedNumber value={wedding.fundingGoal} minimumFractionDigits={2} /> levantados
          </p>
        </Column>
        <Column flexBasis="33%">
          <Number>{days} dias</Number>
          <p>para o grande dia</p>
        </Column>
      </Container>
      <ProgressBarWrapper>
        <ProgressBar percentage={percentage} />
      </ProgressBarWrapper>
      <H3 mb={4}>Escolha algum dos valores abaixo:</H3>
      <Card>
        <CardPrice>
          <span>R$60</span>
        </CardPrice>
        <CardDescription>
          Qualquer ajuda é mega bem-vinda. Além de comemorar conosco no nosso grande dia, você receberá um{" "}
          <b>adesivo exclusivo do casamento</b> criado pela <b>Lunara</b>.
        </CardDescription>
        <CardButton>
          <PaypalButton id="KHA4STBGNH7DE" />
        </CardButton>
      </Card>
      <Card>
        <CardPrice>
          <span>R$200</span>
        </CardPrice>
        <CardDescription>
          Agradecemos de coração! Além de vários shots com os noivos, você receberá <b>uma super caneca</b> com a a arte
          do casamento criada pela <b>Lunara</b>.
        </CardDescription>
        <CardButton>
          <PaypalButton id="TEBDXBDM8WM2A" />
        </CardButton>
      </Card>
      <Card>
        <CardPrice>
          <span>R$500</span>
        </CardPrice>
        <CardDescription>
          Agradecemos de coração! Além de vários shots com os noivos, você receberá <b>uma super caneca</b> com a a arte
          do casamento criada pela <b>Lunara</b>.
        </CardDescription>
        <CardButton>
          <PaypalButton id="KHA4STBGNH7DE" />
        </CardButton>
      </Card>
    </Layout>
  );
};

const CardPrice = styled.div`
  font-size: ${props => props.theme.scale(4.6)};
  font-weight: 500;
  padding: 0 30px;
  min-width: 120px;
  span:after {
    content: ",00";
    font-size: ${props => props.theme.scale(1)};
    font-weight: 400;
  }
`;

const CardButton = styled.div`
  padding: 0 10px 0 10px;
  min-width: 200px;
`;

const CardDescription = styled.div`
  padding: 30px 30px;
  font-size: ${props => props.theme.scale(-0.7)};
`;

const Container = styled.section`
  ${flexbox};
  ${layout};
  ${space};
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  ${flexbox};
  ${layout};
  ${space};
`;

const H3 = styled.h3`
  ${space};
`;

const Number = styled.h3`
  font-size: ${props => props.theme.scale(5)};
`;

const expand = props => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${props.percentage}%;
  }
`;

const move = keyframes` 
  from {
    background-position: 0 0;
  }
  to {
    background-position: 50px 50px;
  }
`;

const ProgressBarWrapper = styled.div`
  background-color: ${props => props.theme.colors.lightColors[2]};
  height: 32px;
  margin: 45px 30px 20px;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.1);
`;

const ProgressBar = styled.div`
  height: 100%;
  max-width: ${props => props.percentage}%;
  animation: ${expand} 1s ease-in-out 1;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${props => props.theme.colors.brand};
  background-image: ${props =>
    `linear-gradient(center bottom, ${props.theme.colors.brand} 37%, ${props.theme.colors.brand} 69%);`};
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    z-index: 1;
    background-size: 50px 50px;
    animation: move 2s linear infinite;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;
    animation: ${move} 2s linear infinite;
  }
`;

Crowdfunding.propTypes = {
  location: PropTypes.object.isRequired
};

export default Crowdfunding;
