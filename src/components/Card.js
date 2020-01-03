import styled from "styled-components";

const Card = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  transition-property: border color box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  &:hover {
    box-shadow: 0px 0px 1px 2px ${props => props.theme.colors.brand};
  }
`;

export default Card;
