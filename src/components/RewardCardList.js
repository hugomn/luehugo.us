import React from "react";
import PropTypes from "prop-types";
import { Grid, Cell } from "styled-css-grid";
import styled from "styled-components";
import { media } from "../constants/responsive";
import RewardCard from "./RewardCard";

const RewardCardList = props => {
  return (
    <nav>
      <StyledGrid>
        {props.rewards.map(reward => (
          <Cell key={reward.name}>
            <RewardCard reward={reward} {...props} />
          </Cell>
        ))}
      </StyledGrid>
    </nav>
  );
};

const StyledGrid = styled(Grid)`
  grid-template-columns: 96%;
  justify-content: center;
  grid-gap: 40px;
  ${media.sm`
    grid-template-columns: repeat(auto-fit,minmax(340px,1fr));
    align-content: stretch;
  `}
`;

RewardCardList.propTypes = {
  rewards: PropTypes.array.isRequired,
  onContribute: PropTypes.func.isRequired
};

export default RewardCardList;
