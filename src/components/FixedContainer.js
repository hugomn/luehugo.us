import styled from 'styled-components';

const FixedContainer = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

export default FixedContainer;
