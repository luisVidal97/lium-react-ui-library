import styled from 'styled-components';

export const StyledInputText = styled.input`
  margin: 5px;
  width: 100%;
  height: ${ props => props.shapeSize};
  font-size: ${ props => props.fontSize};

  border: 1px solid #ccc;
  background-color: ${ props => props.backgroundColor};
  pointer-events: ${ props => props.pointerEvent};
  border-radius:  ${ props => props.border};
  &:hover{
    border-color: ${props => props.borderColor};
  }

  &:focus{
    outline: none !important;
    border-color: ${props => props.borderColor};
    box-shadow: 0 0 5px ${props => props.borderColor};
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  background-color: white;
  margin: 5px;
  padding: 0;
  position: absolute;
  z-index: 100;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.3) !important;
  top: 45px;
  width: 100%;
  max-height: 300px;
  overflow: auto;
`;

export const StyledInputListItem = styled.li`
  padding: 10px 5px;
  cursor: pointer;

  &:hover {
    background-color: #cccccc;
  }
`;
