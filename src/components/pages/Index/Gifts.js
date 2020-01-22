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
        Nosso maior presente será celebrar esse momento tão especial com vocês! Moramos em Berlim, o que nos
        impossibilita levar presentes na mala. Por isso criamos a opção de presentear-nos ajudando a nossa campanha de
        financiamento colaborativo do nosso grande dia! E se você desejar, também tem a opção de nos presentear com alguma experiência
        ou algo do nosso dia-a-dia.
      </Subtitle>
      <Grid gridTemplateColumns={["auto", "auto", "1fr 1fr"]} px={[1, 6]} gridGap={[4, 6]} mb={[1, 4]}>
        <Card px={[4, 3]} data-sal="slide-right" data-sal-delay="0" justifyContent="center">
          <Grid columns={1} rows="1fr auto" textAlign="center">
            <Body>
              <Img src="/img/crowdfunding.svg" mt={4} />
              <Text fontSize={18} color="dark.1" fontWeight="500" mt="2" mb="2">
                Contribuir com o nosso dia
              </Text>
              <Text>Deseja nos presentear com a sua participação na nossa campanha de arrecadação?</Text>
            </Body>
            <BtnLink to="/presentes/crowdfunding" my="4" mx="4">
              Participar da campanha
            </BtnLink>
          </Grid>
        </Card>
        <Card px={[4, 3]} data-sal="slide-left" data-sal-delay="200" justifyContent="center">
          <Grid columns={1} rows="1fr auto" textAlign="center">
            <Box>
              <Img src="/img/gifts.svg" mt={4} />
              <Text fontSize={18} color="dark.1" fontWeight="500" mt="2" mb="2">
                Lista virtual de presentes
              </Text>
              <Text>Quer nos presentear com uma experiência ou algo que ainda não temos em nossa casinha? </Text>
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
