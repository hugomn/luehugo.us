import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import BtnLink from "../../BtnLink";
import { Box } from "../../Box";
import { Flex } from "../../Flex";
import Text from "../../Text";

const Rsvp = () => {
  return (
    <FixedContainer>
      <Flex flexDirection="column" alignItems="flex-end" pr={4}>
        <Box>
          <MainTitle title="index.rsvp.title" subtitle="index.rsvp.subtitle" dark />
          <Flex alignItems="center" flexDirection="column">
            <Text mb={5} color="white" maxWidth="440px" textAlign="center">
              Ter você conosco nesse dia será uma grande alegria!
              Por favor, confirme sua presença até dia 18 de Abril de 2020.
            </Text>
          </Flex>
          <Box textAlign="center">
            <BtnLink mt={4} to="/rsvp" secondary>
              Confirmar presença
            </BtnLink>
          </Box>
        </Box>
      </Flex>
    </FixedContainer>
  );
};

export default Rsvp;
