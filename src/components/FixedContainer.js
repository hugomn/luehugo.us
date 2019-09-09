import styled from "styled-components";
import { flexbox, layout } from "styled-system";

const FixedContainer = styled.section`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  ${flexbox};
  ${layout};
`;

export default FixedContainer;
