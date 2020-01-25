import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import Img from "gatsby-image";
import Card from "./Card";
import { layout, typography } from "styled-system";
import { Box } from "./Box";
import { Text } from "./Text";
import Button from "./Button";
import { useIntl } from "react-intl";

const RewardCard = ({ reward, onContribute }) => {
  const intl = useIntl();
  return (
    <CardWrapper>
      <Wrapper columns={1}>
        <Cell>
          <Box pt={4} pb={3} textAlign="center">
            <Text fontSize={["38px"]} fontWeight="500" color="dark.1">
              {reward.price ? `R$ ${reward.price},00` : "Livre"}
            </Text>
          </Box>
        </Cell>
        {reward.image && (
          <Cell>
            <Box textAlign="center">
              <Image sizes={reward.image.childImageSharp.sizes} />
            </Box>
          </Cell>
        )}
        <Cell>
          <ContentWrapper textAlign="center" height="100%" columns={1} rows="1fr auto">
            <Cell>
              <Box px={4} mt={2} mb={3}>
                <Text fontSize={1} dangerouslySetInnerHTML={{ __html: reward.description }} />
              </Box>
            </Cell>
            <Footer>
              <StyledButton onClick={() => onContribute(reward)}>
                {intl.formatMessage({ id: "gifts.action" })}
              </StyledButton>
            </Footer>
          </ContentWrapper>
        </Cell>
      </Wrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled(Grid)`
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled(Grid)`
  ${typography}
  ${layout};
`;

const Footer = styled(Cell)`
  text-align: center;
  padding: 0px 0px 20px;
`;

const Image = styled(Img)`
  margin: 0 auto;
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;

const StyledButton = styled(Button)`
  width: calc(100% - 46px);
`;

RewardCard.propTypes = {
  reward: PropTypes.shape({
    price: PropTypes.string,
    description: PropTypes.string.isRequired
  }),
  onContribute: PropTypes.func.isRequired
};

export default RewardCard;
