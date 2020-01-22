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
      <MainTitle mb={4} title="index.us.title" subtitle="index.us.subtitle" />
      <Grid gridTemplateColumns={["auto", "auto", "1fr 1fr"]}>
        <Box px={[3, 5]} mb={[6, 6, 0]} data-sal="slide-right" data-sal-delay="0">
          <Box px={[5]}>
            <Img sizes={data.groomImage.childImageSharp.sizes} />
          </Box>

          <Text fontFamily={Orator} fontSize={5} textAlign="center" color="dark.1" mt="4" mb="2">
            Hugo
          </Text>
          <Text textAlign="center">
            "Hugo é uma pessoal incrível em tantas formas, que me faz sentir amada e afortunada todos os dias! É difícil às vezes acreditar que
            estou prestes a casar com o grande amor da minha vida!" - <b>Lu</b>
          </Text>
        </Box>
        <Box px={[3, 5]} data-sal="slide-left" data-sal-delay="200">
          <Box px={[5]}>
            <Img sizes={data.brideImage.childImageSharp.sizes} />
          </Box>
          <Text fontFamily={Orator} fontSize={5} textAlign="center" color="dark.1" mt="4" mb="2">
            Lunara
          </Text>
          <Text textAlign="center">
            "Ela tem todas as nuances de uma pessoa ímpar, intensa e leve. Encanta e cativa com sua
            empatia, amizade e inteligência. Me proporciona uma felicidade que nunca imaginei ser possível." - <b>Hugo</b>
          </Text>
        </Box>
      </Grid>
    </FixedContainer>
  );
};

export default Us;
