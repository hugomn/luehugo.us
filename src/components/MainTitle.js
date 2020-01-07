import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { color, grid, space, position, typography } from "styled-system";
import { Orator, Allura } from "../constants/fonts";
import { media } from "../constants/responsive";
import Text from "./Text";

const MainTitle = ({ dark, title, subtitle, ...props}) => {
  return (
    <Wrapper {...props}>
      <Title fontFamily={Orator} fontSize={[24, 28, 32, 36]} textAlign="center" color={dark ? "white" : "black"}>
        <FormattedMessage id={title}>{txt => <span>{txt}</span>}</FormattedMessage>
      </Title>
      <Subtitle
        fontFamily={Allura}
        fontSize={[46, 56, 66, 76]}
        textAlign="center"
        color={dark ? "accentColors.0" : "accentColors.1"}
      >
        <FormattedMessage id={subtitle}>{txt => <span>{txt}</span>}</FormattedMessage>
      </Subtitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${grid}
  ${position}
  ${typography}
  ${space}
  width: 100%;
  position: relative;
  display: block;
  height: 125px;
  padding-top: 40px;
  background-image: url('/img/maintitle_bg.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 300px auto;
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
  /* position: absolute; */
  z-index: 1;
  width: 100%;
  white-space: nowrap;
  ${media.md`
    margin-top: -10px;
  `}
`;

export default MainTitle;
