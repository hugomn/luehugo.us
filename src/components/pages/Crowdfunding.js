import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "../layout";
import Subtitle from "../Subtitle";
import styled, { keyframes } from "styled-components";
import { flexbox, layout, space, typography, color } from "styled-system";
import moment from "moment";
import { FixedContainer } from "../FixedContainer";
import MainTitle from "../MainTitle";
import { FormattedNumber } from "react-intl";
import Text from "../Text";
import Modal from "react-responsive-modal";
import RewardCardList from "../RewardCardList";
import { Box } from "../Box";
import { Grid } from "../Grid";
import Link from "../Link";
import PaypalButton from "../PaypalButton";
import { media } from "../../constants/responsive";

const Crowdfunding = props => {
  const { wedding } = props.data.site.siteMetadata;
  const [modalOpen, setModalOpen] = useState(false);
  const days = moment(wedding.date).diff(new Date(), "days");
  const percentage = (wedding.fundingPledged / wedding.fundingGoal) * 100;
  const rewards = props.data.allRewardsYaml.edges.map(g => g.node);
  const [reward, setReward] = useState(rewards[0]);
  const handleContribute = reward => {
    setReward(reward);
    setModalOpen(true);
  };
  return (
    <Layout location={props.location} backgroundColor="lightColors.1">
      <FixedContainer pt="4" pb="5">
        <MainTitle title="page.crowdfunding.title" subtitle="page.crowdfunding.subtitle" />
        <Subtitle>
          <i>Crowdfunding</i> (ou Financiamento Colaborativo) é uma nova abordagem em que diversas pessoas, participando
          com pequenas contribuições, fazem um grande projeto acontecer. Considerando nosso contexto atual, e a nossa
          vontade de fazer um evento inesquecível, decidimos abrir esse projeto para que nossos amigos nos ajudem a fazer
          esse dia acontecer! Será um presente inesquecível pra nós!
        </Subtitle>
        <Container display="flex" flexDirection={["column", "row"]} justifyContent="space-around">
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

        <Modal open={modalOpen} onClose={() => setModalOpen(false)} center styles={{ modal: { borderRadius: "6px" } }}>
          <H3 mb={4} pt={0} textAlign="center" color="dark.1">
            Escolha uma forma de pagamento:
          </H3>
          {/* <Text>{reward.description}</Text> */}
          <Grid gridTemplateColumns={["auto", "auto", "1fr 1fr"]} px={[2, 2]} gridGap={5} mb="4">
            <Box px={[2, 2]} justifyContent="center" textAlign="center">
              <Img src="/img/bb_logo.png" mt={4} />
              <Text fontSize={2} color="dark.1" fontWeight="500" mt="2" mb="2">
                Via transferência ou boleto
              </Text>
              <Text mb="5">Utilize o botão abaixo para contribuir via transferência bancária ou boleto.</Text>
              <Link
                target="_blank"
                href={`https://www49.bb.com.br/pagar-receber/#/${reward.bbId}`}
              >
                Contribuir
              </Link>
            </Box>
            <Box px={[2, 2]} justifyContent="center" textAlign="center">
              <Img src="/img/paypal_logo.png" mt={4} />
              <Text fontSize={2} color="dark.1" fontWeight="500" mt="2" mb="2" textAlign="center">
                Via Cartão de Crédito
              </Text>
              <Text textAlign="center" mb="5">
                Utilize o botão abaixo para contribuir via cartão de crédito (qualquer bandeira).
              </Text>
              <PaypalButton id={reward.paypalId} />
            </Box>
          </Grid>
        </Modal>

        <RewardCardList rewards={rewards} onContribute={handleContribute} />
      </FixedContainer>
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
  padding: 0 10px;
  ${flexbox};
  ${layout};
  ${space};
`;

const Img = styled.img`
  ${space};
`;

const H3 = styled.h3`
  ${color};
  ${space};
  ${typography};
`;

const Number = styled.h3`
  font-size: ${props => props.theme.scale(3)};
  ${media.sm`
    font-size: ${props => props.theme.scale(5)};
  `}
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
