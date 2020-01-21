import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import BtnLink from "../../BtnLink";
import styled from "styled-components";
import { space } from "styled-system";
import { Grid } from "../../Grid";
import { Box } from "../../Box";
import Text from "../../Text";
import Card from "../../Card";

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
      <Grid gridTemplateColumns={["auto", "auto", "1fr 1fr"]} px={[1, 6]} gridGap={[4, 6]} mb={[1, 4]}>
        <Card px={[2, 3]} data-sal="slide-right" data-sal-delay="0" justifyContent="center">
          <Grid columns={1} rows="1fr auto" textAlign="center">
            <Body>
              <Img src="/img/crowdfunding.svg" mt={4} />
              <Text fontSize={3} color="brand" fontWeight="500" mt="2" mb="2">
                Financiamento colaborativo
              </Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Body>
            <BtnLink to="/presentes/crowdfunding" my="4" mx="4">
              Participar da campanha
            </BtnLink>
          </Grid>
        </Card>
        <Card px={[2, 3]} data-sal="slide-left" data-sal-delay="200" justifyContent="center">
          <Grid columns={1} rows="1fr auto" textAlign="center">
            <Box>
              <Img src="/img/gifts.svg" mt={4} />
              <Text fontSize={3} color="brand" fontWeight="500" mt="2" mb="2">
                Lista de presentes
              </Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <BtnLink to="/presentes/lista" my="40px" mx="4">
              Ver lista de presentes
            </BtnLink>
          </Grid>
        </Card>
      </Grid>
    </FixedContainer>
  );
};

const Body = styled(Box)`
  ${space};
`;

const Img = styled.img`
  ${space};
`;

export default Gifts;
