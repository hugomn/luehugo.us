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
          Como já temos nossa casinha em Berlim quase pronta e cabe pouca coisa na mala, pensamos que nossa lista de presentes poderia ser uma
          mistura de experiências especiais que ainda não vivemos e algumas coisinhas que vão nos proporcionar momentos de lazer e relaxamento.
        </Subtitle>

        <GiftCardList gifts={gifts} />
      </FixedContainer>
    </Layout>
  );
};

export default Gifts;
