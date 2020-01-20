import React from "react";
import PropTypes from "prop-types";
import Layout from "../layout";
import Subtitle from "../Subtitle";
import MainTitle from "../MainTitle";
import { FixedContainer } from "../FixedContainer";
import styled from "styled-components";
import Card from "../Card";
import { Flex } from "../Flex";
import { typography, space } from "styled-system";
import Button from "../Button";
import BtnLink from "../BtnLink";

const Rsvp = props => {
  const { confirmation } = props;
  return (
    <Layout location={props.location} backgroundColor="lightColors.1">
      <FixedContainer pt="4" pb="5">
        <MainTitle title="index.rsvp.title" subtitle="index.rsvp.subtitle" />
        {confirmation ? (
          <>
            <Subtitle>Obrigado!</Subtitle>
            <BtnLink mt={4} to="/rsvp" secondary>
              Confirmar outro convidado
            </BtnLink>
          </>
        ) : (
          <>
            <Subtitle>Digite seus dados e confirme sua presença abaixo.</Subtitle>
            <Card p="5" mt="5" mx={[1, 3, 5, 7]} textAlign="center">
              <Form className="email-form" name="rsvp" method="POST" data-netlify="true" action="/rsvp/sucesso">
                <Flex flexDirection="column">
                  <Input type="hidden" name="form-name" value="rsvp" />
                  <Label htmlFor="name" fontWeight="500">
                    Nome:
                  </Label>
                  <Input type="text" name="name" placeholder="Digite seu nome " id="name" required mb="4" />
                  <Label htmlFor="email" fontWeight="500">
                    Email:
                  </Label>
                  <Input type="email" name="email" placeholder="Email" id="email" required mb="4" />
                  <Label htmlFor="song">Alguma música especial que gostaria de ouvir?</Label>
                  <Input type="text" name="song" placeholder="Digite sua música favorita" id="song" mb="4" />
                  <Label htmlFor="comment">Algum comentário adicional?</Label>
                  <Input type="text" name="comment" placeholder="Deixe sua mensagem" id="comment" required mb="5" />
                  <Button type="submit">Confirmar</Button>
                </Flex>
              </Form>
            </Card>
          </>
        )}
      </FixedContainer>
    </Layout>
  );
};

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  ${typography}
  margin-bottom: 8px;
`;

const Input = styled.input`
  font-size: ${({ theme: t }) => t.scale(0.2)};
  padding: 18px 12px;
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
`;

Rsvp.propTypes = {
  confirmation: PropTypes.bool,
  location: PropTypes.object.isRequired
};

export default Rsvp;
