import React from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import { withPrefix } from "gatsby";

import { media } from "../constants/responsive";
import { FixedContainer } from "./FixedContainer";
import A from "./A";

const Footer = ({ author, langs, sourceCodeLink, currentLangKey }) => {
  return (
    <Wrapper>
      <FixedContainer>
        <Grid columns="1">
          <LeftCell middle>
            <span>
              Designed with <HeartIcon /> by{" "}
              <A fontWeight="500" href="https://www.lunara.me" target="_blank">
                Lunara
              </A>{" "}
              and coded with
              <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                <GatsbyIcon src={withPrefix("/img/gatsbyjs.svg")} alt="Gatsby" />
              </a>
              by{" "}
              <A fontWeight="500" href="https://www.hugo.im" target="_blank">
                Hugo
              </A>
            </span>
          </LeftCell>
        </Grid>
      </FixedContainer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 10px 5px;
  font-size: 0.4rem;
  color: rgba(0, 0, 0, 0.44);
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 -3px 8px 0 rgba(0, 0, 0, 0.05);
  ${media.md`
    padding: 10px 30px;
    font-size: 0.8rem;
  `}
`;

const GatsbyIcon = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin: 0 6px;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.4s;
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }
`;

const HeartIcon = styled(FaHeart)`
  margin: 0 6px;
  cursor: pointer;
  transition: all 0.4s;
  animation: ${keyframes`to { transform: scale(1.2); }`} 0.42s infinite alternate;
  :hover {
    color: #c60000 !important;
  }
`;

const LeftCell = styled(Cell)`
  text-align: center;
  height: 68px;
  ${media.md`
    text-align: center;
  `};
`;

Footer.propTypes = {
  author: PropTypes.object.isRequired,
  langs: PropTypes.array,
  sourceCodeLink: PropTypes.string.isRequired,
  currentLangKey: PropTypes.string
};

export default Footer;
