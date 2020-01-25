import styled from "styled-components";
import { flexbox, grid, space } from "styled-system";

const Card = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition-property: border color box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  &:hover {
    box-shadow: ${props => (props.disabled ? "auto" : `0px 0px 1px 2px ${props.theme.colors.brand};`)};
  }
  ${flexbox}
  ${grid}
  ${space}
`;

export default Card;
