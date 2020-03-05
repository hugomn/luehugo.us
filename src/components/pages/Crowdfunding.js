import React, { useState } from "react";
import PropTypes from "prop-types";
import Subtitle from "../Subtitle";
import styled, { keyframes } from "styled-components";
import { flexbox, layout, space, typography, color } from "styled-system";
import moment from "moment";
import { FixedContainer } from "../FixedContainer";
import MainTitle from "../MainTitle";
import { FormattedNumber, useIntl } from "react-intl";
import RewardCardList from "../RewardCardList";
import { media } from "../../constants/responsive";
import PaymentModal from "../PaymentModal";

import { Flex } from "../Flex";
import { Input } from "../Input";
import { Label } from "../Label";
import Button from "../Button";

const Crowdfunding = props => {
  const { wedding } = props.data.site.siteMetadata;
  const [modalOpen, setModalOpen] = useState(false);
  const days = moment(wedding.date).diff(new Date(), "days");
  const percentage = Math.round(
    (wedding.fundingPledged / wedding.fundingGoal) * 100
  );
  const rewards = props.data.rewards.edges.map(g => g.node);
  const [reward, setReward] = useState(rewards[0]);
  const intl = useIntl();
  const handleContribute = reward => {
    setReward(reward);
    setModalOpen(true);
  };
  return (
    <FixedContainer pt="4" pb="5">
      <MainTitle
        title="page.crowdfunding.title"
        subtitle="page.crowdfunding.subtitle"
      />
      <Subtitle>
        {intl.formatMessage({ id: "crowdfunding.description" })}
      </Subtitle>
      <Container
        display="flex"
        flexDirection={["column", "row"]}
        justifyContent="space-around"
      >
        <Column flexBasis="33%">
          <Number>{percentage}%</Number>
          <p>{intl.formatMessage({ id: "crowdfunding.pledged" })}</p>
        </Column>
        <Column flexBasis="33%">
          <Number>
            R${" "}
            <FormattedNumber
              value={wedding.fundingPledged}
              minimumFractionDigits={2}
            />
          </Number>
          <p>
            {intl.formatMessage({ id: "crowdfunding.of" })} R${" "}
            <FormattedNumber
              value={wedding.fundingGoal}
              minimumFractionDigits={2}
            />{" "}
            {intl.formatMessage({ id: "crowdfunding.goal" })}
          </p>
        </Column>
        <Column flexBasis="33%">
          <Number>
            {days} {intl.formatMessage({ id: "crowdfunding.days" })}
          </Number>
          <p>{intl.formatMessage({ id: "crowdfunding.days.description" })}</p>
        </Column>
      </Container>
      <ProgressBarWrapper>
        <ProgressBar percentage={percentage} />
      </ProgressBarWrapper>
      <H3 mb={4}>
        {intl.formatMessage({ id: "crowdfunding.choose.one.value" })}
      </H3>

      <PaymentModal
        open={modalOpen}
        // bbId={reward.bbId}
        // paypalId={reward.paypalId}
        reward={reward}
        onClose={() => setModalOpen(false)}
      />
      <form
        className="email-form"
        name="contributions"
        method="POST"
        data-netlify="true"
        action="/rsvp/sucesso"
        // onSubmit={handleSubmit}
        // ref={formRef}
      >
        <Flex flexDirection="column">
          <Input type="hidden" name="form-name" value="contributions" />
          <Label htmlFor="name" fontWeight="500">
            {intl.formatMessage({ id: "rsvp.form.name.label" })}:
          </Label>
          <Input
            type="text"
            name="name"
            placeholder={intl.formatMessage({
              id: "rsvp.form.name.placeholder"
            })}
            id="name"
            required
            mb="4"
          />
          <Button type="submit">
            {intl.formatMessage({ id: "rsvp.form.confirm" })}
          </Button>
        </Flex>
      </form>
      <RewardCardList rewards={rewards} onContribute={handleContribute} />
    </FixedContainer>
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
