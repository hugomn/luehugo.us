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

const Rsvp = props => {
  return (
    <Layout location={props.location} backgroundColor="lightColors.1">
      <FixedContainer pt="4" pb="6">
        <MainTitle title="index.rsvp.title" subtitle="index.rsvp.subtitle" />
        <Subtitle>
          Nosso maior presente será poder celebrar esse momento tão especial com nossos amados familiares e amigos. E
          além disso, nós moramos atualmente em Berlim, o que dificulta trazer qualquer presente na mala. Sendo assim,
          criaremos uma campanha de financiamento colaborativo, onde mostraremos exatamente o valor que arracadamos, e
          oferecemos também a opção de nos presentear com alguma experiência ou algo do nosso dia-a-dia.
        </Subtitle>
        <Card p="5" mt="5">
          <form className="email-form" name="rsvp" method="POST" data-netlify="true">
            <Flex flexDirection="column">
              <Input type="hidden" name="form-name" value="rsvp " />
              <Label htmlFor="name" fontWeight="500">
                Nome:
              </Label>
              <Input type="text" name="name" placeholder="Digite seu nome:" id="name" required mb="4" />
              <Label htmlFor="email" fontWeight="500">
                Email:
              </Label>
              <Input type="email" name="email" placeholder="Email" id="email" required mb="4" />
              <Label htmlFor="song">Alguma música especial que gostaria de ouvir?</Label>
              <Input type="text" name="song" placeholder="Digite sua míusica favorita" id="song" mb="4" />
              <Label htmlFor="comment">Algum comentário adicional?</Label>
              <Input type="text" name="comment" placeholder="Deixe sua mensagem" id="comment" required mb="4" />
              <Button type="submit">Confirmar</Button>
            </Flex>
          </form>
        </Card>

        {/* <button onClick={handleSubmit}>Enviar</button>
        <Iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe0tiP_8Ys_0DCJSrV5EHy0wG-9LNhTzCjmU6iadP8Ed5uU8A/viewform?embedded=true"
          width="100%"
          height="1372"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </Iframe> */}
      </FixedContainer>
    </Layout>
  );
};

const Label = styled.label`
  ${typography}
`;

const Input = styled.input`
  width: 100%;
  font-size: ${({ theme: t }) => t.scale(0.2)};
  padding: 18px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme: t }) => t.colors.lightColors[3]};
  ${space}
`;

const Iframe = styled.iframe`
  margin-top: 86px;
`;

Rsvp.propTypes = {
  location: PropTypes.object.isRequired
};

export default Rsvp;
