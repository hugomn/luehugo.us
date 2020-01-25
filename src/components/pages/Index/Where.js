import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import { Box } from "../../Box";
import Link from "../../Link";
import { useIntl } from "react-intl";

const Where = () => {  
  const intl = useIntl();
  return (
    <FixedContainer>
      <MainTitle title="index.where.title" subtitle="index.where.subtitle" />
      <Subtitle mb={5}>
        <span dangerouslySetInnerHTML={{ __html: intl.formatHTMLMessage({ id: "where.description"})}} />
      </Subtitle>
      <Box textAlign="center">
        <Link mt={4} px={5} width="auto" href="https://goo.gl/maps/ReAQMUb4tMk32Zc76" target="_blank">
          {intl.formatMessage({ id: "where.action" })}
        </Link>
      </Box>
    </FixedContainer>
  );
};

export default Where;
