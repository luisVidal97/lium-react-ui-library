import styled from 'styled-components';

export const StyledButton = styled.button`
  height: ${ props => props.shapeSize};
  font-size: ${ props => props.fontSize};
  color: ${ props => props.overallColor};
  background-color: ${ props => props.backgroundBtn};
  border: 2px solid ${ props => props.borderBtn};


  &:hover {
    transition: 0.4s;
    cursor: ${ props => props.cursor};
    background-color: ${ props => props.backgroundBtnHover};
    border: 2px solid ${ props => props.borderBtnHover};
    color: ${ props => props.cursor ==='pointer'? 'white' : props.overallColor };
  }

  &:focus { outline: none; }

  &:active {
    opacity: ${ props => props.cursor ==='pointer'? '0.4' : '1' };
    transition: 0.2s
  }

  border-radius:${ props => props.borderRadiusBtn};
  margin: 0 1em;
  padding: 0.25em 1em;
`;
