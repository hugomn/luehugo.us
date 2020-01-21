import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import { Box } from "../../Box";
import BtnLink from "../../BtnLink";

const Where = () => {  
  return (
    <FixedContainer>
      <MainTitle title="index.where.title" subtitle="index.where.subtitle" />
      <Subtitle mb={5}>
        Celebração e recepção serão realizadas no Bosque São Pedro, rua Dimas Bergo Xisto, 396 - São Pedro, Juiz de Fora
        - MG/Brasil, 36037-510. A cerimônia será às 16h em uma área de gramado, lembre-se de garantir calçados
        confortáveis.
      </Subtitle>
      <Box textAlign="center">
        <BtnLink mt={4} to="/rsvp" px={5}>
          Ver no mapa
        </BtnLink>
      </Box>
    </FixedContainer>
  );
};

export default Where;
