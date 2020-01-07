import React from "react";
import PropTypes from "prop-types";
import Layout from "../layout";
import { FormattedMessage } from "react-intl";
import H2 from "../H2";
import Subtitle from "../Subtitle";

const Rsvp = props => {
  return (
    <Layout location={props.location}>
      <H2 textAlign="center">
        <FormattedMessage id="gifts.title">{txt => <span>{txt}</span>}</FormattedMessage>
      </H2>
      <Subtitle>
        Nosso maior presente será poder celebrar esse momento tão especial com nossos amados familiares e amigos. E além
        disso, nós moramos atualmente em Berlim, o que dificulta trazer qualquer presente na mala. Sendo assim,
        criaremos uma campanha de financiamento colaborativo, onde mostraremos exatamente o valor que arracadamos, e
        oferecemos também a opção de nos presentear com alguma experiência ou algo do nosso dia-a-dia.
      </Subtitle>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe0tiP_8Ys_0DCJSrV5EHy0wG-9LNhTzCjmU6iadP8Ed5uU8A/viewform?embedded=true"
        width="640"
        height="1272"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
      {/* <script type="text/javascript">var submitted=false;</script> */}
      {/* <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location='THE REDIRECT LINK HERE';}"></iframe> */}

      {/* <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe0tiP_8Ys_0DCJSrV5EHy0wG-9LNhTzCjmU6iadP8Ed5uU8A/formResponse?embedded=true"
        method="post"
        target="hidden_iframe"
        // onSubmit="submitted=true;"
      >
        <label>Email</label>
        <input name="emailAddress" type="text" placeholder="Name" />
        <input type="submit" value="Send" />
      </form> */}
    </Layout>
  );
};

Rsvp.propTypes = {
  location: PropTypes.object.isRequired
};

export default Rsvp;
