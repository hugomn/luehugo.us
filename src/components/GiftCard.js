import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import Img from "gatsby-image";
import Card from "./Card";
import { layout, space, typography } from "styled-system";
import { useIntl } from "react-intl";
import Button from "./Button";

const GiftCard = ({ gift, onBuy }) => {
  const intl = useIntl();
  const soldOut = gift.total <= gift.sold;
  return (
    <CardWrapper disabled={soldOut}>
      <Wrapper columns={1} rows="200px auto">
        <Cell>
          <Image soldOut={soldOut} sizes={gift.image.childImageSharp.sizes} />
        </Cell>
        <Cell>
          <ContentWrapper textAlign="center" height="100%" columns={1} rows="1fr auto">
            <Body px={4} py={0}>
              <Title p={0} mt={3} mb={3}>
                {gift.name}
              </Title>
              <Text fontSize={1}>
                {gift.total} {intl.formatMessage({ id: "gifts.items.of" })} <Price>R$ {gift.price}</Price>
              </Text>
              <Text fontSize={1} mb={3}>
                {intl.formatMessage({ id: soldOut ? "gifts.soldout" : "gifts.items.missing" }, { total: gift.total - gift.sold })}
              </Text>
            </Body>
            <Footer>
              <StyledButton disabled={soldOut} onClick={() => onBuy(gift)}>{intl.formatMessage({ id: "gifts.action" })}</StyledButton>
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
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
`;

const Wrapper = styled(Grid)`
  height: 100%;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: calc(100% - 46px);
`;

const ContentWrapper = styled(Grid)`
  ${typography}
  ${layout};
`;

const Body = styled(Cell)`
  ${space};
`;

const Footer = styled(Cell)`
  text-align: center;
  padding: 0px 0px 20px;
`;

const Title = styled.h4`
  ${layout};
  ${space};
`;

const Price = styled.span`
  font-weight: 500;
`;

const Text = styled.p`
  ${typography}
  ${layout};
  ${space};
`;

const Image = styled(Img)`
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  filter: ${({ soldOut }) => (soldOut ? `grayscale(100%);` : `none`)};
`;

GiftCard.propTypes = {
  gifts: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string.isRequired
  }),
};

export default GiftCard;
