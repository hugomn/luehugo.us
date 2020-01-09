import React from "react";
import PropTypes from "prop-types";
import { FaBars as MenuIcon } from "react-icons/fa";
import { InvisibleSpan } from "./Invisible";
import styled, { withTheme } from "styled-components";
import { Link } from "gatsby";
import { endsWith } from "ramda";
import { injectIntl, FormattedMessage } from "react-intl";
import { hidden, media } from "../constants/responsive";
import { color } from "../utils/color";


class Menu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleOpen = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  getMenuItems = (isSelected, menu, langKey, transparent) => {
    return menu.map(item => {
      const slug = `${langKey !== "pt" ? "/" + langKey : ""}${item.slug}`;

      const subItems = item.items ? (
        <ul style={{ display: "none" }}>{this.getMenuItems(isSelected, item.items, langKey)}</ul>
      ) : null;
      return (
        <li key={item.slug || item.link}>
          <FormattedMessage id={item.label}>
            {label =>
              item.link ? (
                <MenuA href={item.link} onClick={this.handleOpen} transparent={transparent ? 1 : 0}>
                  {label}
                </MenuA>
              ) : (
                <MenuLink
                  selected={isSelected(slug)}
                  to={slug}
                  onClick={this.handleOpen}
                  transparent={transparent ? 1 : 0}
                >
                  {label}
                </MenuLink>
              )}
          </FormattedMessage>
          {subItems}
        </li>
      );
    });
  };

  render() {
    const { intl, menu, url, theme, transparent } = this.props;
    const { isOpen } = this.state;
    const isSelected = endsWith(url);
    const menuItems = this.getMenuItems(isSelected, menu, intl.locale, transparent);

    return (
      <section>
        <CloseNav isOpen={isOpen} onClick={this.handleOpen} />
        <MenuLabel isOpen={isOpen} htmlFor="cb-menu">
          <MenuIcon color={transparent ? theme.a.color.dark : theme.a.color.light} />
          <InvisibleSpan>Menu</InvisibleSpan>
          <Checkbox type="checkbox" name="cb-menu" id="cb-menu" checked={this.state.isOpen} onChange={this.handleOpen} />
        </MenuLabel>
        <Nav isOpen={isOpen}>
          <Ul isOpen={isOpen}>{menuItems}</Ul>
        </Nav>
      </section>
    );
  }
}

const CloseNav = styled.section`
  ${hidden.md}
  ${props =>
    props.isOpen
      ? ` top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;`
      : ""};
`;

const Nav = styled.nav`
  text-align: center;
  position: fixed;
  top: 0;
  right: calc(-100%);
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  z-index: 2;
  padding: ${props => props.theme.menu.mobile.padding};
  transition-timing-function: ease-in, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);
  transition: ${props =>
    props.isOpen ? "transform 1s, background-color 0.5s" : "transform 0.5s, background-color 1s"};
  background-color: ${props => (props.isOpen ? props.theme.menu.mobile.opened.bg : props.theme.menu.mobile.closed.bg)};
  ${props => (props.isOpen ? "transform: translateX(-60%);" : "")};
  ${media.md`
    padding: ${props => props.theme.menu.desktop.padding};
    display: flex;
    flex-grow: 1;
    align-items: center;
    position: relative;
    right: auto;
    left: auto;
    height: auto;
    z-index: 1030;
    transform: none;
    background-color: ${props => props.theme.menu.mobile.closed.bg};
  `}
`;

const MenuLabel = styled.label`
  ${hidden.md}
  width: ${props => props.theme.menu.mobile.label.width};
  height: ${props => props.theme.menu.mobile.label.height};
  position: relative;
  float: left;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};
  margin: 1.2rem 1.5rem;
  transition: color 0.4s;
  font-size: ${props => props.theme.menu.mobile.label.fontSize};
  &:hover {
    color: ${props => props.theme.colors.brand};
    transition: color 0.4s;
  }
`;

const Checkbox = styled.input`
  ${hidden.md}
  position: absolute;
  opacity: 0.02;
  cursor: pointer;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const MenuLink = styled(Link)`
  font-size: ${props => props.theme.menu.mobile.a.fontSize};
  font-family: ${props => props.theme.menu.mobile.a.fontFamily};
  text-transform: lowercase;
  padding: ${props => props.theme.menu.mobile.a.padding};
  display: block;
  text-align: ${props => props.theme.menu.mobile.a.textAlign};
  text-decoration: none;
  transition: 0.5s;
  color: ${props => (props.selected ? props.theme.menu.mobile.a.active.color : props.theme.menu.mobile.a.color)};
  &:hover {
    color: ${props => props.theme.menu.mobile.a.active.color};
    transition: 0.5s;
  }
  ${media.md`
      display: inline;
      font-size: ${props => props.theme.menu.desktop.a.fontSize};
      font-family: ${props => props.theme.menu.desktop.a.fontFamily};
      font-weight: ${props => props.theme.menu.desktop.a.fontWeight};
      padding: ${props => props.theme.menu.desktop.a.padding};
      ${props =>  color(props.theme.menu.desktop.a, props.selected, props.transparent)}};
    `}
`;

const MenuA = MenuLink.withComponent(styled.a``);

const Ul = styled.ul`
  display: block;
  margin: ${props => props.theme.menu.mobile.ul.margin};
  list-style: none;
  transition: opacity 1s, transform 0.5s;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  ${media.md`
      opacity: 1;
      margin: ${props => props.theme.menu.desktop.ul.margin};
      li {
        display: inline-block;
      }
    `}
`;

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
  transparent: PropTypes.bool.isRequired,
};

export default injectIntl(withTheme(Menu));
