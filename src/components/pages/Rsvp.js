import React from "react";
import PropTypes from "prop-types";
import Subtitle from "../Subtitle";
import MainTitle from "../MainTitle";
import { FixedContainer } from "../FixedContainer";
import styled from "styled-components";
import Card from "../Card";
import { Flex } from "../Flex";
import { typography, space } from "styled-system";
import Button from "../Button";
import BtnLink from "../BtnLink";
import { media } from "../../constants/responsive";
import { Box } from "../Box";
import { useIntl } from "react-intl";

const Rsvp = props => {
  const intl = useIntl();
  const { confirmation, langKey } = props;
  return (
    <FixedContainer pt="4" pb="5">
      <MainTitle title="index.rsvp.title" subtitle="index.rsvp.subtitle" />
      {confirmation ? (
        <>
          <Subtitle>
            <span dangerouslySetInnerHTML={{ __html: intl.formatHTMLMessage({ id: "rsvp.confirmation.message" }) }} />
          </Subtitle>
          <Box textAlign="center" mt={4}>
            <BtnLink mt={4} to={langKey === "pt" ? "/rsvp" : "/en/rsvp"}>
              {intl.formatMessage({ id: "rsvp.confirmation.action" })}
            </BtnLink>
          </Box>
        </>
      ) : (
        <>
          <Subtitle>{intl.formatMessage({ id: "rsvp.description" })}</Subtitle>
          <Card p={["18px", 5]} mt={[4, 5]} mx={[1, 3, 5, 7]} textAlign="center">
            <Form
              className="email-form"
              name="rsvp"
              method="POST"
              data-netlify="true"
              action={langKey === "pt" ? "/rsvp/sucesso" : "/en/rsvp/success"}
            >
              <Flex flexDirection="column">
                <Input type="hidden" name="form-name" value="rsvp" />
                <Label htmlFor="name" fontWeight="500">
                  {intl.formatMessage({ id: "rsvp.form.name.label" })}:
                </Label>
                <Input
                  type="text"
                  name="name"
                  placeholder={intl.formatMessage({ id: "rsvp.form.name.placeholder" })}
                  id="name"
                  required
                  mb="4"
                />
                <Label htmlFor="email" fontWeight="500">
                  {intl.formatMessage({ id: "rsvp.form.email.label" })}:
                </Label>
                <Input
                  type="email"
                  name="email"
                  placeholder={intl.formatMessage({ id: "rsvp.form.email.placeholder" })}
                  id="email"
                  required
                  mb="4"
                />
                <Label htmlFor="song">{intl.formatMessage({ id: "rsvp.form.song.label" })}</Label>
                <Input
                  type="text"
                  name="song"
                  placeholder={intl.formatMessage({ id: "rsvp.form.song.placeholder" })}
                  id="song"
                  mb="4"
                />
                <Label htmlFor="comment">{intl.formatMessage({ id: "rsvp.form.comment.label" })}</Label>
                <Input
                  type="text"
                  name="comment"
                  placeholder={intl.formatMessage({ id: "rsvp.form.comment.placeholder" })}
                  id="comment"
                  required
                  mb="5"
                />
                <Button type="submit">{intl.formatMessage({ id: "rsvp.form.confirm" })}</Button>
              </Flex>
            </Form>
          </Card>
        </>
      )}
    </FixedContainer>
  );
};

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  ${typography}
  margin-bottom: 8px;
  font-size: ${({ theme: t }) => t.scale(-1)};
  ${media.md`
    font-size: ${({ theme: t }) => t.scale(0)};
  `}
`;

const Input = styled.input`
  font-size: ${({ theme: t }) => t.scale(-1)};
  padding: 12px 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme: t }) => t.colors.lightColors[3]};
  font-family: ${({ theme: t }) => t.fonts.Poppins};
  color: ${({ theme: t }) => t.colors.dark[1]};
  ${space}
  &::placeholder {
    color: ${({ theme: t }) => t.colors.lightColors[3]};
  }
  &:focus,
  &:active {
    outline: none;
    border: 1px solid ${props => props.theme.colors.brand};
    box-shadow: 0px 0px 1px 0px ${props => props.theme.colors.brand};
  }
  ${media.md`
    font-size: ${({ theme: t }) => t.scale(0.2)};
    padding: 18px 12px;
  `}
`;

Rsvp.propTypes = {
  confirmation: PropTypes.bool,
  langKey: PropTypes.string,
  location: PropTypes.object.isRequired
};

export default Rsvp;
