import styled from "styled-components";
import { color, typography } from "styled-system";

const H2 = styled.h2`
  margin: ${props => props.theme.h2.margin};
  padding: ${props => props.theme.h2.padding};
  text-align: ${props => props.theme.h2.textAlign};
  ${color};
  ${typography};
`;

export default H2;
