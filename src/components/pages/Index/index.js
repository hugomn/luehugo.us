import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";
import styled from "styled-components";
import Layout from "../../layout";
import { color, typography, width, space } from "styled-system";
import { Orator } from "../../../constants/fonts";
import { media } from "../../../constants/responsive";
import { Box } from "../../Box";
import Us from "./Us";
import Timeline from "./Timeline";
import Groomsmen from "./Groomsmen";
import Bridesmaids from "./Bridesmaids";
import Rsvp from "./Rsvp";
import Where from "./Where";
import Gifts from "./Gifts";
import BtnLink from "../../BtnLink";
import { FormattedMessage } from "react-intl";

const Index = props => {
  const { lang } = props;
  const url = `${lang !== "pt" ? "/" + lang : ""}/adiamento`;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 500);
  }, []);
  return (
    <Layout location={props.location}>
      <VideoContainer>
        <TitleContainer color="white" fontFamily={Orator} fontSize={[45, 65, 85, 105]}>
          <DateBox>
              27
            <br />
              02
            <br />
              21
          </DateBox>
        </TitleContainer>
        <Video playsInline autoPlay muted loop id="myVideo">
          <source src="/video.mp4" type="video/mp4" />
        </Video>
      </VideoContainer>
      <Container>
        <Box id="os-noivos" py={["4", "5"]}>
          <Us />
        </Box>
        <TimelineBox id="historia" py={["4", "5"]} backgroundColor="lightColors.1">
          <Timeline {...props} />
        </TimelineBox>
        <Box id="padrinhos" py={["4", "5"]}>
          <Groomsmen {...props} />
        </Box>
        <Box id="madrinhas" py="5" backgroundColor="lightColors.1">
          <Bridesmaids {...props} />
        </Box>
        <WhereBox id="onde" pt="5" pb="6">
          <Where />
        </WhereBox>
        <RsvpBox id="rsvp" pt={["5", "6"]} pb={["6", "7"]}>
          <Rsvp />
        </RsvpBox>
        <Box id="presentes" py="5" backgroundColor="lightColors.1">
          <Gifts />
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        styles={{ modal: { borderRadius: "6px", padding: "1.2rem 0" } }}
      >
        <AnnouncementImg width={[300, 450, 550]} src={`/img/announcement_${lang}.jpg`} m={[0, 20]} mt={0} />
        <ButtonContainer>
          <BtnLink mt={3} px={4} to={url}>
            <FormattedMessage id="index.announcement.action">{txt => txt}</FormattedMessage>
          </BtnLink>
        </ButtonContainer>
      </Modal>
    </Layout>
  );
};

const AnnouncementImg = styled.img`
  ${space}
  ${width}
`;

const TimelineBox = styled(Box)`
  background-image: url('/img/timeline_bg.jpg');
  background-position: right bottom;
  background-repeat: no-repeat;
`;

const RsvpBox = styled(Box)`
  background-image: url('/img/rsvp_bg.jpg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WhereBox = styled(Box)`
  background-image: url('/img/where_bg.jpg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleContainer = styled.section`
  ${color};
  ${typography};
  position: absolute;
  z-index: 2;
  width: 100%;
  text-align: center;
  top: 50%;
  padding: 0;
  margin-top: -130px;
  ${media.md`
    margin-top: -180px;
  `}
`;

const DateBox = styled.div`
  border: 2px solid white;
  display: inline-block;
  line-height: ${({ theme }) => theme.scale(9.6)};
  padding: ${({ theme }) => `${theme.scale(1)} ${theme.scale(7)}`};
  ${media.md`
    line-height: ${({ theme }) => theme.scale(11.8)};
  `}
`;

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
    background: rgba(0, 0, 0, 0.45);
  }
`;

const Video = styled.video`
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
  margin-top: calc(100vh - ${({ theme }) => theme.header.height}px);
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;

Index.propTypes = {
  location: PropTypes.object.isRequired
};

export default Index;
