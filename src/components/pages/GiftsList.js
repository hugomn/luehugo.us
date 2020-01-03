import React from "react";
import Layout from "../layout";
import { FormattedMessage } from "react-intl";
import H2 from "../H2";
import Subtitle from "../Subtitle";
import GiftCardList from "../GiftCardList";

const Gifts = props => {
  const gifts = props.data.allGiftsYaml.edges.map(g => g.node);
  console.log(gifts);
  return (
    <Layout location={props.location}>
      <H2 textAlign="center">
        <FormattedMessage id="giftslist.title">{txt => <span>{txt}</span>}</FormattedMessage>
      </H2>
      <Subtitle mb={5}>
        Nosso maior presente será poder celebrar esse momento tão especial com nossos amados familiares e amigos. E além
        disso, nós moramos atualmente em Berlim, o que dificulta trazer qualquer presente na mala. Sendo assim,
        criaremos uma campanha de financiamento colaborativo, onde mostraremos exatamente o valor que arracadamos, e
        oferecemos também a opção de nos presentear com alguma experiência ou algo do nosso dia-a-dia.
      </Subtitle>

      <GiftCardList gifts={gifts} />
    </Layout>
  );
};

export default Gifts;
