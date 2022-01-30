  import React from "react";
import Layout from "../../components/layout";
import { FixedContainer } from "../../components/FixedContainer";
import MainTitle from "../../components/MainTitle";
import Subtitle from "../../components/Subtitle";
import { Box } from "../../components/Box";
import BtnLink from "../../components/BtnLink";

const GiftSuccess = props => {
  return (
    <Layout location={props.location} backgroundColor="lightColors.1">
      <FixedContainer pt="4" pb="5">
        <MainTitle title="index.gifts.title" subtitle="index.gifts.subtitle" />
        <Subtitle>
          <b>Obrigado pela sua contribuição!</b>
          <br />Não temos palavras pra agradecer sua ajuda em fazer nosso grande dia acontecer! 
          E ele só será completo se tivermos você comemorando conosco!
        </Subtitle>
        <Box textAlign="center" mt={4}>
          <BtnLink mt={4} to="/" px={5}>
            Voltar à home
          </BtnLink>
        </Box>
      </FixedContainer>
    </Layout>
  );
};

export default GiftSuccess;
