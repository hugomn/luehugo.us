import styled from "styled-components";
import { typography } from "styled-system";

const A = styled.a`
    ${typography}
    color: ${props => props.theme.a.color};
    text-decoration: ${props => props.theme.a.textDecoration};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: ${props => props.theme.a.hover.color};
        transition: 0.3s;
    }
`;

export default A;
