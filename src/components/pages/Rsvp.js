import React from "react";
import PropTypes from "prop-types";
import Layout from "../layout";
import Subtitle from "../Subtitle";
import MainTitle from "../MainTitle";
import { FixedContainer } from "../FixedContainer";
import styled from "styled-components";

// const handleSubmit = () => {
//   console.log("[dev:hugo] submit", true);
// };

const Rsvp = props => {
  return (
    <Layout location={props.location}>
      <FixedContainer pt="4">
        <MainTitle title="index.rsvp.title" subtitle="index.rsvp.subtitle" />
        <Subtitle>
          Nosso maior presente será poder celebrar esse momento tão especial com nossos amados familiares e amigos. E
          além disso, nós moramos atualmente em Berlim, o que dificulta trazer qualquer presente na mala. Sendo assim,
          criaremos uma campanha de financiamento colaborativo, onde mostraremos exatamente o valor que arracadamos, e
          oferecemos também a opção de nos presentear com alguma experiência ou algo do nosso dia-a-dia.
        </Subtitle>
        <form className="email-form" name="rsvp" method="POST" data-netlify="true">
          <label htmlFor="email">Your email address</label>
          <div>
            <input type="email" name="email" placeholder="Email" id="email" required />
            <button type="submit">Confirm</button>
          </div>
        </form>
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

const Iframe = styled.iframe`
  margin-top: 86px;
`;

Rsvp.propTypes = {
  location: PropTypes.object.isRequired
};

export default Rsvp;
