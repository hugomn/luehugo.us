import React, { useRef } from "react";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";
import styled from "styled-components";
import { space, color, typography } from "styled-system";
import { useIntl } from "react-intl";
import { Grid } from "./Grid";
import { Box } from "./Box";
import Text from "./Text";
import Link from "./Link";
import PaypalButton from "./PaypalButton";
import { Flex } from "./Flex";
import { Input } from "./Input";
import { Label } from "./Label";
import Button from "./Button";

import getFormData from "get-form-data";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const PaymentModal = props => {
  const { reward, onClose, open } = props;
  // const { bbId, paypalId } = reward;
  const intl = useIntl();
  const formRef = useRef(null);
  const handleSubmit = event => {
    // const data = new FormData(event.target);
    // console.log(data);
    // console.log(formRef.current.action);
    // event.preventDefault();
    var data = getFormData(formRef.current);
    console.log(data);
    // const response = await fetch(formRef.current.action, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json"
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "no-referrer", // no-referrer, *client
    //   body: JSON.stringify(data) // body data type must match "Content-Type" header
    // });
    // console.log(response.json());

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contributions", ...data })
    // })
    //   .then(() => alert("Success!"))
    //   .catch(error => alert(error));
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      styles={{ modal: { borderRadius: "6px" } }}
    >
      <H3 mb={4} pt={0} textAlign="center" color="dark.1">
        {intl.formatMessage({ id: "payment.choose.payment" })}
      </H3>
      <Form
        className="email-form"
        name="contributions"
        method="POST"
        data-netlify="true"
        action="/rsvp/sucesso"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Flex flexDirection="column">
          <Input type="hidden" name="form-name" value="contributions" />
          <Label htmlFor="name" fontWeight="500">
            {intl.formatMessage({ id: "rsvp.form.name.label" })}:
          </Label>
          <Input
            type="text"
            name="name"
            placeholder={intl.formatMessage({
              id: "rsvp.form.name.placeholder"
            })}
            id="name"
            required
            mb="4"
          />
          <Button type="submit">
            {intl.formatMessage({ id: "rsvp.form.confirm" })}
          </Button>
        </Flex>
      </Form>
      {/* <Grid
        gridTemplateColumns={["auto", "auto", "1fr 1fr"]}
        px={[2, 2]}
        gridGap={5}
        mb="4"
      >
        <Box px={[2, 2]} justifyContent="center" textAlign="center">
          <Img src="/img/bb_logo.png" mt={4} />
          <Text fontSize={2} color="dark.1" fontWeight="500" mt="2" mb="2">
            {intl.formatMessage({ id: "payment.transfer.title" })}
          </Text>
          <Text mb="5">
            {intl.formatMessage({ id: "payment.transfer.description" })}
          </Text>
          <Link
            target="_blank"
            href={`https://www49.bb.com.br/pagar-receber/#/${bbId}`}
          >
            {intl.formatMessage({ id: "payment.transfer.action" })}
          </Link>
        </Box>
        <Box px={[2, 2]} justifyContent="center" textAlign="center">
          <Img src="/img/paypal_logo.png" mt={4} />
          <Text
            fontSize={2}
            color="dark.1"
            fontWeight="500"
            mt="2"
            mb="2"
            textAlign="center"
          >
            {intl.formatMessage({ id: "payment.cc.title" })}
          </Text>
          <Text textAlign="center" mb="5">
            {intl.formatMessage({ id: "payment.cc.description" })}
          </Text>
          <PaypalButton id={paypalId}>
            {intl.formatMessage({ id: "payment.cc.action" })}
          </PaypalButton>
        </Box>
      </Grid> */}
    </Modal>
  );
};

PaymentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  // bbId: PropTypes.string.isRequired,
  // paypalId: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  reward: PropTypes.object.isRequired
};

const Form = styled.form`
  width: 100%;
`;

const Img = styled.img`
  ${space};
`;

const H3 = styled.h3`
  ${color};
  ${space};
  ${typography};
`;

export default PaymentModal;
