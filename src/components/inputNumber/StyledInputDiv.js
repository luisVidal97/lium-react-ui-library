import styled from 'styled-components';

export const StyledInputDiv = styled.div`

  display: inline-block;
  position: relative;
  color: #A6A6A6;
  &::after {
    position: absolute;
    top: 25%;
    left: .5em;
  }
  &::after{
    content: '${props => props.prefix}';
    font-size: ${props => props.fontSize};
  }
`;
