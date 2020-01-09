import React from "react";
import Layout from "../layout";
import Subtitle from "../Subtitle";
import GiftCardList from "../GiftCardList";
import { FixedContainer } from "../FixedContainer";
import MainTitle from "../MainTitle";

const Gifts = props => {
  const gifts = props.data.allGiftsYaml.edges.map(g => g.node);
  return (
    <Layout location={props.location} backgroundColor="lightColors.1">
      <FixedContainer pt="4" pb="4">
        <MainTitle title="page.gifts.title" subtitle="page.gifts.subtitle" />
        <Subtitle mb={5}>
          Nosso maior presente será poder celebrar esse momento tão especial com nossos amados familiares e amigos. E
          além disso, nós moramos atualmente em Berlim, o que dificulta trazer qualquer presente na mala. Sendo assim,
          criaremos uma campanha de financiamento colaborativo, onde mostraremos exatamente o valor que arracadamos, e
          oferecemos também a opção de nos presentear com alguma experiência ou algo do nosso dia-a-dia.
        </Subtitle>

        <GiftCardList gifts={gifts} />
      </FixedContainer>
    </Layout>
  );
};

export default Gifts;
