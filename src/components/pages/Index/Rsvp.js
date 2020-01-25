import React from "react";
import MainTitle from "../../MainTitle";
import { FixedContainer } from "../../FixedContainer";
import BtnLink from "../../BtnLink";
import { Box } from "../../Box";
import { Flex } from "../../Flex";
import Text from "../../Text";
import { useIntl } from "react-intl";

const Rsvp = () => {
  const intl = useIntl();
  const { formatMessage, locale } = intl;
  const url = `${locale !== "pt" ? "/" + locale : ""}/rsvp`;
  return (
    <FixedContainer>
      <Flex flexDirection="column" alignItems={["center", "flex-end"]} pr={[0, 4]}>
        <Box data-sal="slide-left" data-sal-delay="300">
          <MainTitle title="index.rsvp.title" subtitle="index.rsvp.subtitle" dark secondary />
          <Flex alignItems="center" flexDirection="column">
            <Text mb={5} mt={2} color="white" maxWidth="420px" textAlign="center">
              {formatMessage({ id: "index.rsvp.description" })}
            </Text>
          </Flex>
          <Box textAlign="center">
            <BtnLink mt={3} px={4} to={url} secondary>
              {formatMessage({ id: "index.rsvp.action" })}
            </BtnLink>
          </Box>
        </Box>
      </Flex>
    </FixedContainer>
  );
};

export default Rsvp;
