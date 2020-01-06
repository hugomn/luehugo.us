import React from "react";
import PropTypes from "prop-types";
import Menu from "./Menu";
import styled from "styled-components";
import throttle from "lodash.throttle";
import theme from "../themes/theme";
import { Link } from "gatsby";
import { FixedContainer } from "./FixedContainer";

const delta = 5;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didScroll: true,
      lastScrollTop: 0,
      hidden: false,
      transparent: props.isHome,
      viewportHeight: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.handleScroll);
  }

  updateWindowDimensions = () => {
    this.setState({ viewportHeight: window.innerHeight });
  };

  hideHeader = () => {
    this.setState({
      hidden: true
    });
  };

  showHeader = () => {
    this.setState({
      hidden: false
    });
  };

  hasScrolled = throttle(() => {
    const st = window.scrollY;
    if (Math.abs(this.state.lastScrollTop - st) <= delta) {
      return;
    }
    if (st > this.state.lastScrollTop && st > theme.header.height) {
      this.hideHeader();
    } else {
      if (st < this.getDocHeight()) {
        this.showHeader();
      }
    }
    this.setState({
      lastScrollTop: st,
      transparent: this.props.isHome && st < this.state.viewportHeight
    });
  }, 250);

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  handleScroll = () => {
    this.setState({
      didScroll: true
    });
    this.hasScrolled();
  };

  render() {
    const { menu, url } = this.props;
    const { transparent } = this.state;
    return (
      <Wrapper hidden={this.state.hidden} transparent={transparent}>
        <FixedContainer display="flex" flexDirection="row" justifyContent="space-between">
          <LogoContainer>
            <Link to="/">
              <Logo src={transparent ? "/img/logo.svg" : "/img/logo_black.svg"} />
            </Link>
          </LogoContainer>
          <Menu menu={menu} url={url} transparent={transparent} />
        </FixedContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.header`
  background: ${props => (props.transparent ? "transparent" : "rgba(255, 255, 255, 0.97)")};
  box-shadow: ${props => (props.transparent ? "none" : "0 4px 12px 0 rgba(0,0,0,.05) !important")};
  transition: all 0.25s ease-out;
  height: ${props => `${props.theme.header.height}px`};
  top: ${props => (props.hidden ? `-${props.theme.header.height}px` : 0)};
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const LogoContainer = styled.section`
  padding: 7px 0px;
`;

const Logo = styled.img`
  height: ${props => `${props.theme.header.height - 14}px`};
`;

Header.propTypes = {
  isHome: PropTypes.bool,
  menu: PropTypes.array.isRequired,
  url: PropTypes.string
};

export default Header;
