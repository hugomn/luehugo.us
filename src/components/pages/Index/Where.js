import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import { Box } from "../../Box";
import BtnLink from "../../BtnLink";
import Link from "../../Link";

const Where = () => {  
  return (
    <FixedContainer>
      <MainTitle title="index.where.title" subtitle="index.where.subtitle" />
      <Subtitle mb={5}>
        Nossa celebração e recepção serão realizadas no <b>Bosque São Pedro</b> (rua Dimas Bergo Xisto, 396 - São Pedro,
        Juiz de Fora). A cerimônia será às 16h em uma área de gramado. Lembre-se de garantir calçados confortáveis .
      </Subtitle>
      <Box textAlign="center">
        <Link mt={4} px={5} width="auto" href="https://goo.gl/maps/ReAQMUb4tMk32Zc76" target="_blank">
          Ver no mapa
        </Link>
      </Box>
    </FixedContainer>
  );
};

export default Where;
