import styled from "styled-components";
import BtnLink from "./BtnLink";

const Button = BtnLink.withComponent(styled.button`
  width: calc(100% - 40px);
  margin: auto 20px;
  cursor: pointer;
`);

export default Button;
