import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import BtnLink from "../../BtnLink";
import styled from "styled-components";
import { flexbox, layout, space } from "styled-system";

const Gifts = () => {  
  return (
    <FixedContainer>
      <MainTitle title="index.gifts.title" subtitle="index.gifts.subtitle" />
      <Subtitle mb={5}>
        Nosso maior presente será poder celebrar esse momento tão especial com nossos amados familiares e amigos. E além
        disso, nós moramos atualmente em Berlim, o que dificulta trazer qualquer presente na mala. Sendo assim,
        criaremos uma campanha de financiamento colaborativo, onde mostraremos exatamente o valor que arracadamos, e
        oferecemos também a opção de nos presentear com alguma experiência ou algo do nosso dia-a-dia.
      </Subtitle>
      <Container display="flex" flexDirection="row" justifyContent="space-around" mt={4} mx={3}>
        <Column flexBasis="50%">
          <h3>Lista de presentes</h3>
          <Img src="/img/gifts.svg" mt={3} />
          <BtnLink mt={4} to="/presentes/lista">
            Ver lista de presentes
          </BtnLink>
        </Column>
        <Column flexBasis="50%">
          <h3>Financiamento colaborativo</h3>
          <Img src="/img/crowdfunding.svg" mt={3} />
          <BtnLink mt={4} to="/presentes/crowdfunding">
            Participar da campanha
          </BtnLink>
        </Column>
      </Container>
    </FixedContainer>
  );
};

const Container = styled.section`
  ${flexbox};
  ${layout};
  ${space};
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  ${flexbox};
  ${layout};
  ${space};
`;

const Img = styled.img`
  ${space};
`;

export default Gifts;
