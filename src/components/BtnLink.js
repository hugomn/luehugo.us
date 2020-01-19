import { Link } from "gatsby";
import styled from "styled-components";
import { space } from "styled-system";

const BtnLink = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.accentColors[0] : theme.colors.brand)};
  font-size: ${({ theme }) => theme.scale(-0.6)};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-weight: 500;
  padding: 1rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.4rem;
  text-decoration: none;
  transition: 0.3s;
  border-width: 0px;
  line-height: 24px;
  ${space};
  &:hover {
    background-color: ${({ secondary, theme }) => (secondary ? theme.colors.brand : theme.colors.accentColors[0])};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
  }
`;

export default BtnLink;
