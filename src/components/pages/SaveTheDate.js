import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Helmet from "react-helmet";

const SaveTheDate = props => {
  const title = `Save the Date | Lunara & Hugo`;
  const description = `Queridos amigos! Esperamos vocês no nosso dia especial: 2 de maio de 2020! Reserve essa data e venha comemorar conosco! ❤️`;
  return (
    <MainContainer>
      <Helmet defaultTitle={title}>
        <meta name="author" content="Hugo Nogueira" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.luehugo.us" />
        <meta property="og:image" content="https://www.luehugo.us/favicon.png" />
      </Helmet>
      <Envelope>
        <CardContainer align="center">
          <Card sizes={props.data.file.childImageSharp.sizes} />
        </CardContainer>
      </Envelope>
    </MainContainer>
  );
};

const CardContainer = styled.div`
  padding: 40px 40px;
`;

const Card = styled(Img)`
  display: block;
  margin: 0px auto;
  max-width: 570px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Envelope = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("/img/envelope.png");
  background-position: calc(50% + 100px) 0;
  background-repeat: no-repeat;
  background-size: auto;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background-image: url("/img/background.jpeg");
  background-repeat: repeat;
  background-position: center;
`;

export default SaveTheDate;
