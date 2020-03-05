import styled from "styled-components";
import { typography } from "styled-system";
import { media } from "../constants/responsive";

export const Label = styled.label`
  ${typography}
  margin-bottom: 8px;
  font-size: ${({ theme: t }) => t.scale(-1)};
  ${media.md`
    font-size: ${({ theme: t }) => t.scale(0)};
  `}
`;
