import React from "react";
import MainTitle from "../../MainTitle";
import Img from "gatsby-image";
import { Box } from "../../Box";
import Text from "../../Text";
import { Orator } from "../../../constants/fonts";
import { FixedContainer } from "../../FixedContainer";
import styled from "styled-components";
import { Flex } from "../../Flex";

const Bridesmaids = props => {
  return (
    <FixedContainer>
      <MainTitle title="index.bridesmaids.title" subtitle="index.bridesmaids.subtitle" mb={4} secondary />
      <Flex justifyContent="center" flexWrap="wrap">
        {props.data.bridesmaids.edges.map(({ node }, i) => (
          <Box
            p={["1", "4"]}
            mb={[4]}
            key={node.name}
            flexBasis={["50%", "33%", "25%"]}
            data-sal="zoom-in"
            data-sal-delay={(i % 4) * 100}
          >
            <Box px="3">
              <Picture sizes={node.image.childImageSharp.sizes} />
            </Box>
            <Text fontFamily={Orator} fontSize={3} textAlign="center" color="accentColors.0" mt="4" mb="2">
              {node.name}
            </Text>
            {node.description && 
              <Text textAlign="center" fontSize={1}>
                {node.description}
              </Text>}
          </Box>
        ))}
      </Flex>
    </FixedContainer>
  );
};

const Picture = styled(Img)`
  border-radius: 50%;
`;

export default Bridesmaids;
