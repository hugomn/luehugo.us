import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Helmet from "react-helmet";

const SaveTheDate = props => {
  return (
    <MainContainer>
      <Helmet defaultTitle={`Save the Date | Lunara & Hugo`}>
        <meta name="author" content={`Hugo Nogueira`} />
        <meta
          name="description"
          content={`Dear friends, we are very looking forward to have you in our special day, May 2nd, 2020!`}
        />
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
  background-repeat: no-repeat;
  background-position: center;
`;

export default SaveTheDate;
