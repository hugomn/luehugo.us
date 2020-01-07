import React from "react";
import MainTitle from "../../MainTitle";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { Box } from "../../Box";
import Text from "../../Text";
import { Orator } from "../../../constants/fonts";
import { FixedContainer } from "../../FixedContainer";
import styled from "styled-components";
import { Flex } from "../../Flex";

const Groomsmen = () => {
  const data = useStaticQuery(graphql`
    query GroomsmenQuery {
      timeline: allGroomsmenYaml(sort: { fields: name }) {
        edges {
          node {
            name
            description
            image {
              childImageSharp {
                sizes(maxWidth: 750) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `);
  
  return (
    <FixedContainer>
      <MainTitle title="index.groomsmen.title" subtitle="index.groomsmen.subtitle" mb={4} />
      <Flex justifyContent="center" flexWrap="wrap">
        {data.timeline.edges.map(({ node }, i) => (
          <Box p={4} mb={[4]} key={node.name} flexBasis={["50%", "33%", "25%"]}>
            <Box px="3">
              <Picture sizes={node.image.childImageSharp.sizes} />
            </Box>
            <Text fontFamily={Orator} fontSize={3} textAlign="center" color="brand" mt="4" mb="2">
              {node.name}
            </Text>
            <Text textAlign="center" fontSize={1}>
              {node.description}
            </Text>
          </Box>
        ))}
      </Flex>
    </FixedContainer>
  );
};

const Picture = styled(Img)`
  border-radius: 50%;
`;

export default Groomsmen;
