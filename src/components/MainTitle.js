import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { color, grid, space, position, typography, layout } from "styled-system";
import { Orator, Allura } from "../constants/fonts";
import { media } from "../constants/responsive";
import Text from "./Text";

const MainTitle = ({ title, subtitle, dark, secondary, ...props}) => {
  return (
    <Wrapper {...props}>
      <Title fontFamily={Orator} fontSize={[22, 26, 28, 32]} textAlign="center" color={dark ? "white" : "black"}>
        <FormattedMessage id={title}>{txt => <span>{txt}</span>}</FormattedMessage>
      </Title>
      <Subtitle
        fontFamily={Allura}
        fontSize={[38, 48, 60, 68]}
        textAlign="center"
        color={secondary ? "accentColors.0" : "brand"}
      >
        <FormattedMessage id={subtitle}>{txt => <span>{txt}</span>}</FormattedMessage>
      </Subtitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: block;
  height: 80px;
  padding-top: 40px;
  background-image: url('/img/maintitle_bg.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 300px auto;
  ${media.md`
    height: 125px;
  `}
  ${grid}
  ${position}
  ${typography}
  ${space}
  ${layout}
`;

const Title = styled.h2`
  ${typography}
  ${color}
  padding: 0;
  position: absolute;
  z-index: 2;
  width: 100%;
  white-space: nowrap;
`;

const Subtitle = styled(Text)`
  z-index: 1;
  width: 100%;
  white-space: nowrap;
  opacity: 0.45;
  ${media.md`
    margin-top: -10px;
  `}
`;

export default MainTitle;
