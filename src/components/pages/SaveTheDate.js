import React from 'react';
import styled from 'styled-components';

const SaveTheDate = props => {
  return (
    <MainContainer>
      <Envelope>
        <CardContainer align="center">
          <Card src="/img/card.png" />
        </CardContainer>
      </Envelope>
    </MainContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  padding-top: 40px;
`;

const Card = styled.img`
  display: block;
  margin: 0px auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const Envelope = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("/img/envelope.png");
  background-position: calc(50% + 100px) 0; 
  background-repeat: no-repeat;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background-image: url("/img/background.jpeg");
  background-repeat: no-repeat;
  background-position: center;
`;

export default SaveTheDate;
