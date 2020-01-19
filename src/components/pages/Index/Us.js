import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { Grid } from "../../Grid";
import { Box } from "../../Box";
import Text from "../../Text";
import { Orator } from "../../../constants/fonts";
import { FixedContainer } from "../../FixedContainer";

const Us = () => {
  const data = useStaticQuery(graphql`
    query UsQuery {
      groomImage: file(relativePath: { eq: "images/groom2.png" }) {
        childImageSharp {
          sizes(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpSizes
          }
        }
      },
      brideImage: file(relativePath: { eq: "images/bride2.png" }) {
        childImageSharp {
          sizes(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  `);
  
  return (
    <FixedContainer>
      <MainTitle title="index.us.title" subtitle="index.us.subtitle" />
      <Subtitle mb={5}>
        Nosso maior presente será poder celebrar esse momento tão especial com nossos amados familiares e amigos. E além
        disso, nós moramos atualmente em Berlim, o que dificulta trazer qualquer presente na mala. Sendo assim,
        criaremos uma campanha de financiamento colaborativo, onde mostraremos exatamente o valor que arracadamos, e
        oferecemos também a opção de nos presentear com alguma experiência ou algo do nosso dia-a-dia.
      </Subtitle>
      <Grid gridTemplateColumns={["auto", "auto", "1fr 1fr"]}>
        <Box px={[3, 6]} mb={[6, 6, 0]} data-sal="slide-right" data-sal-delay="0">
          <Img sizes={data.groomImage.childImageSharp.sizes} />
          <Text fontFamily={Orator} fontSize={4} textAlign="center" color="dark.1" mt="4" mb="2">
            Hugo Nogueira
          </Text>
          <Text textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci sed neque convallis arcu egestas. A sed
            tincidunt vulputate lectus nulla odio. Fermentum tincidunt sed.
          </Text>
        </Box>
        <Box px={[3, 6]} data-sal="slide-left" data-sal-delay="200">
          <Img sizes={data.brideImage.childImageSharp.sizes} />
          <Text fontFamily={Orator} fontSize={4} textAlign="center" color="dark.1" mt="4" mb="2">
            Lunara Costa
          </Text>
          <Text textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci sed neque convallis arcu egestas. A sed
            tincidunt vulputate lectus nulla odio. Fermentum tincidunt sed.
          </Text>
        </Box>
      </Grid>
    </FixedContainer>
  );
};

export default Us;
