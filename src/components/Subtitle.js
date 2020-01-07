import styled from "styled-components";
import { layout, space } from "styled-system";

const Subtitle = styled.p`
  color: ${({dark, theme}) => dark ? theme.colors.white : theme.colors.black };
  text-align: center;
  max-width: 700px;
  padding: 0px 40px;
  margin: 20px auto 0px;
  ${layout};
  ${space};
`;

export default Subtitle;
