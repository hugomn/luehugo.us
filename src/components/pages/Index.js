import React from "react";
import PropTypes from "prop-types";
import Layout from "../layout";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { color, grid, position, typography } from "styled-system";
import { Allura } from "../../constants/fonts";
import H2 from "../H2";

const Index = props => {
  return (
    <Layout location={props.location}>
      <>
        <VideoContainer>
          <Title fontFamily={Allura} fontSize={[45, 65, 75, 95]} color="white">
            Lunara & Hugo
          </Title>
          <Video
            src="https://www.youtube.com/embed/wO9fflWkoRI?controls=0&autoplay=1&loop=1&showinfo=0&rel=0&mute=1&playlist=wO9fflWkoRI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
        <Container>
          <Section>
            <H2 textAlign="center" id="historia">
              <FormattedMessage id="index.story">{txt => <span>{txt}</span>}</FormattedMessage>
            </H2>
          </Section>
          <Section>
            <H2 textAlign="center" id="onde">
              <FormattedMessage id="index.where">{txt => <span>{txt}</span>}</FormattedMessage>
            </H2>
          </Section>
          <Section>
            <H2 textAlign="center" id="padrinhos-madrinhas">
              <FormattedMessage id="index.bestfriends">{txt => <span>{txt}</span>}</FormattedMessage>
            </H2>
          </Section>
        </Container>
      </>
    </Layout>
  );
};

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  pointer-events: none;
  overflow: hidden;
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.15);
  }
`;

const Video = styled.iframe`
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  margin-top: 100vh;
  min-height: 2000px;
`;

const Section = styled.section`
  ${grid};
  ${position};
`;

const Title = styled.h1`
  ${color};
  ${typography};
  position: absolute;
  z-index: 2;
  width: 100%;
  text-align: center;
  top: 50%;
  padding: 0;
  margin-top: -50px;
`;

Index.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Index;
