import React from "react";
import { FixedContainer } from "../FixedContainer";
import MainTitle from "../MainTitle";
import { useIntl } from "react-intl";
import layout from "../layout";
import { space } from "styled-system";
import styled from "styled-components";

const Announcement = () => {
  const intl = useIntl();
  return (
    <FixedContainer pt="4" pb="4">
      <MainTitle title="announcement.title" subtitle="announcement.subtitle" />
      <Subtitle mb={5}>
        <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "announcement.body" })}} />
      </Subtitle>
      
    </FixedContainer>
  );
};

const Subtitle = styled.p`
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.black)};
  font-size: ${({ theme }) => theme.scale(0.275)};
  text-align: justify;
  max-width: 700px;
  padding: 0px 26px;
  margin: 20px auto 0px;
  ${layout};
  ${space};
`;

export default Announcement;
