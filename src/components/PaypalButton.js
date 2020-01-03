import React from "react";
import BtnLink from "./BtnLink";
import styled from "styled-components";

const PaypalButton = ({ id, label = "Contribuir" }) => {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value={id} />
      <Button type="submit">{label}</Button>
    </form>
  );
};

const Button = BtnLink.withComponent(styled.button`
  width: calc(100% - 40px);
  margin: auto 20px;
  cursor: pointer;
`);

export default PaypalButton;
