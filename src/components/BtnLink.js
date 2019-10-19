import { Link } from "gatsby";
import styled from "styled-components";
import { space } from "styled-system";

const BtnLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.brand};
  font-size: ${({ theme }) => theme.scale(0)};
  padding: 1rem 2rem;
  margin: ${({ theme }) => theme.scale(2)} auto;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.2rem;
  text-decoration: none;
  display: table;
  transition: 0.3s;
  ${space};
  &:hover {
    background-color: ${props => props.theme.colors.accentColors[0]};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
  }
`;

export default BtnLink;
