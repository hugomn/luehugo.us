import React from "react";
import PropTypes from "prop-types";
import GiftCard from "./GiftCard";
import { Grid, Cell } from "styled-css-grid";
import styled from "styled-components";
import { media } from "../constants/responsive";

const GiftCardList = props => {
  return (
    <nav>
      <StyledGrid gap="30px">
        {props.gifts.map(gift =>
          <Cell key={gift.name}>
            <GiftCard gift={gift} {...props} />
          </Cell>
        )}
      </StyledGrid>
    </nav>
  );
};

const StyledGrid = styled(Grid)`
  grid-template-columns: 86%;
  justify-content: center;
  ${media.sm`
    grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    align-content: stretch;
  `}
`;

GiftCardList.propTypes = {
  gifts: PropTypes.array.isRequired,
  imageOnTop: PropTypes.bool
};

export default GiftCardList;
