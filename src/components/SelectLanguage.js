import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { media } from "../constants/responsive";
import { color } from "../utils/color";

const SelectLanguage = props => {
  const links = props.langs.map(({ langKey, link, selected }) => (
    <Li key={langKey}>
      <LangLink to={link} selected={selected} transparent={props.transparent ? 1 : 0}>
        {langKey}
      </LangLink>
    </Li>
  ));

  return (
    <Nav>
      <Ul>{links}</Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: ${props => props.theme.i18n.selectLanguage.padding};
`;

const Ul = styled.ul``;

const LangLink = styled(Link)`
  font-family: ${props => props.theme.i18n.selectLanguage.li.fontFamily};
  font-size: ${props => props.theme.i18n.selectLanguage.li.fontSize};
  font-weight: ${props => props.theme.i18n.selectLanguage.li.fontWeight};
  text-transform: uppercase;
  padding: ${props => props.theme.i18n.selectLanguage.li.padding};
  ${props => color(props.theme.menu.mobile.a, props.selected, props.transparent)}  ;
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.menu.mobile.a.active.color};
  }
  ${media.md`
    ${props => color(props.theme.menu.desktop.a, props.selected, props.transparent)};
  `}
`;

const Li = styled.li`
  &:nth-child(n + 2):before {
    content: '/';
    color: ${props => props.theme.colors.dark[3]};
  }
  display: inline-block;
`;

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
