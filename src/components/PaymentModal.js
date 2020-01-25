import React from "react";
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

const PaymentModal = props => {
  const { bbId, paypalId, onClose, open } = props;
  const intl = useIntl();
  return (
    <Modal open={open} onClose={onClose} center styles={{ modal: { borderRadius: "6px" } }}>
      <H3 mb={4} pt={0} textAlign="center" color="dark.1">
        {intl.formatMessage({ id: "crowdfunding.choose.payment" })}
      </H3>
      <Grid gridTemplateColumns={["auto", "auto", "1fr 1fr"]} px={[2, 2]} gridGap={5} mb="4">
        <Box px={[2, 2]} justifyContent="center" textAlign="center">
          <Img src="/img/bb_logo.png" mt={4} />
          <Text fontSize={2} color="dark.1" fontWeight="500" mt="2" mb="2">
            {intl.formatMessage({ id: "crowdfunding.transfer.title" })}
          </Text>
          <Text mb="5">{intl.formatMessage({ id: "crowdfunding.transfer.description" })}</Text>
          <Link target="_blank" href={`https://www49.bb.com.br/pagar-receber/#/${bbId}`}>
            {intl.formatMessage({ id: "crowdfunding.transfer.action" })}
          </Link>
        </Box>
        <Box px={[2, 2]} justifyContent="center" textAlign="center">
          <Img src="/img/paypal_logo.png" mt={4} />
          <Text fontSize={2} color="dark.1" fontWeight="500" mt="2" mb="2" textAlign="center">
            {intl.formatMessage({ id: "crowdfunding.cc.title" })}
          </Text>
          <Text textAlign="center" mb="5">
            {intl.formatMessage({ id: "crowdfunding.cc.description" })}
          </Text>
          <PaypalButton id={paypalId}>{intl.formatMessage({ id: "crowdfunding.cc.action" })}</PaypalButton>
        </Box>
      </Grid>
    </Modal>
  );
};

PaymentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  bbId: PropTypes.string.isRequired,
  paypalId: PropTypes.string.isRequired,
  onClose: PropTypes.func
};


const Img = styled.img`
  ${space};
`;

const H3 = styled.h3`
  ${color};
  ${space};
  ${typography};
`;

export default PaymentModal;
