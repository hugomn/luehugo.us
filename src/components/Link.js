import styled from "styled-components";
import BtnLink from "./BtnLink";

const Link = BtnLink.withComponent(styled.a`
  width: calc(100% - 40px);
  margin: auto 20px;
  cursor: pointer;
`);

export default Link;
