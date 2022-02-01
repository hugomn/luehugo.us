import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components";
import { StaticQuery, graphql, withPrefix } from "gatsby";
import { IntlProvider, FormattedMessage } from "react-intl";
import en from "../data/messages/en";
import pt from "../data/messages/pt";
import theme from "../themes/theme";
import {
  getLangs,
  getUrlForLang,
  getCurrentLangKey,
  isHomePage,
} from "ptz-i18n";
import Helmet from "react-helmet";
import { color } from "styled-system";

const messages = { en, pt };

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = (props) => {
  const { backgroundColor, children, location } = props;
  const url = location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  // const isHome = isHomePage(url, false, langs);
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey !== "pt" ? langKey : ""}`;
  const isHome = homeLink.replace(/\/$/, "") === url.replace(/\/$/, "");
  const langs2 = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  console.log({ langs2 });
  const langsMenu = langs2.map((item) => ({
    ...item,
    link: item.link.replace("//", "/").replace(`/${defaultLangKey}/`, "/"),
  }));
  console.log({ langsMenu });
  const {
    menu,
    author,
    sourceCodeLink,
    siteUrl,
    description,
  } = props.data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={langKey} messages={messages[langKey]}>
        <BodyContainer>
          <FormattedMessage id="title">
            {(txt) => (
              <Helmet defaultTitle={txt} titleTemplate={`%s | ${txt}`}>
                <meta name="author" content={author.name} />
                <meta name="description" content={description} />
                <meta property="og:title" content={txt} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta
                  property="og:image"
                  content={`${siteUrl}${withPrefix("/avatar.jpg")}`}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={txt} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content={`@${author.twitter}`} />
                <meta name="twitter:author" content={`@${author.twitter}`} />
                <meta
                  name="twitter:image"
                  content={`${siteUrl}${withPrefix("/avatar.jpg")}`}
                />
              </Helmet>
            )}
          </FormattedMessage>
          <Header isHome={isHome} url={url} menu={menu} langs={langsMenu} />
          <Main backgroundColor={backgroundColor}>{children}</Main>
          <Footer
            author={author}
            langs={langsMenu}
            sourceCodeLink={sourceCodeLink}
          />
          <GlobalStyle />
        </BodyContainer>
      </IntlProvider>
    </ThemeProvider>
  );
};

const bodyStyle = css`
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.fonts.Poppins};
  font-feature-settings: "calt" 1, "clig" 1, "dlig" 1, "kern" 1, "liga" 1,
    "salt" 1;
  font-weight: 300;
  line-height: ${(props) => props.theme.lineHeight};
`;

const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyle}
  }
  a {
    color: ${(props) => props.theme.a.color.light};
    text-decoration: ${(props) => props.theme.a.textDecoration};
    transition: all 0.2s;
    :hover {
      transition: all 0.2s;
      color: ${(props) => props.theme.a.hover.color};
    }
  }
  b, strong {
    font-weight: bold;
  }
  h1, h2 {
    font-family: ${(props) => props.theme.fonts.Allura};
  }
  h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.Poppins};
  }
  h1{
    margin:${(props) => props.theme.h1.margin};
    padding:${(props) => props.theme.h1.padding};
    font-size:${(props) => props.theme.h1.fontSize};
    line-height: 1.4;
  }
  h2{
    margin:${(props) => props.theme.h2.margin};
    padding:${(props) => props.theme.h2.padding};
    font-size:${(props) => props.theme.h2.fontSize};
    line-height: 1.4;
  }
  h3{
    margin:${(props) => props.theme.h3.margin};
    padding:${(props) => props.theme.h3.padding};
    font-size:${(props) => props.theme.h3.fontSize};
    font-weight: 500;
    line-height: 1.4;
  }
  h4{
    margin:${(props) => props.theme.h4.margin};
    padding:${(props) => props.theme.h4.padding};
    font-size:${(props) => props.theme.h4.fontSize};
    font-weight: 500;
    line-height: 1.4;
  }
  h5{
    margin:${(props) => props.theme.h5.margin};
    padding:${(props) => props.theme.h5.padding};
    font-size:${(props) => props.theme.h5.fontSize};
    line-height: 1.4;
  }
  h6{
    margin:${(props) => props.theme.h6.margin};
    padding:${(props) => props.theme.h6.padding};
    font-size:${(props) => props.theme.h6.fontSize};
    line-height: 1.4;
  }
  figcaption {
    font-family: ${(props) => props.theme.fonts.System};
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }
  sup {
    font-size: 75%;
    vertical-align: super;
  }
  .footnotes {
    ol, p {
      font-size: 14px !important;
    }
    p {
      padding-top: 0px !important;
    }
    .footnote-backref {
      display: none;
    }
  }
  .giphy-embed {
    margin-top: 2rem;
  }
`;

const Main = styled.main`
  padding: ${(props) => props.theme.padding};
  flex-grow: 1;
  ${color}
`;

const BodyContainer = styled.div`
  ${bodyStyle}
  background-color: ${(props) => props.theme.bg};
  bottom: 0;
  left: 0;
  min-height: 100%;
  overflow-x: hidden;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export default (props) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteUrl
            description
            languages {
              defaultLangKey
              langs
            }
            author {
              name
              bio
              homeCity
              email
              defaultLink
              twitter
            }
            sourceCodeLink
            menu {
              label
              slug
            }
          }
        }
      }
    `}
    render={(data) => <Layout data={data} {...props} />}
  />
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  // ...backgroundColor.propTypes
};
