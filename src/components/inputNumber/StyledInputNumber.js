import styled from 'styled-components';

export const StyledInputNumber = styled.input`
  margin: 5px;
  height: ${ props => props.shapeSize};
  font-size: ${ props => props.fontSize};
  border-radius: ${ props => props.border};
  border: 1px solid #ccc;
  background-color: ${ props => props.backgroundColor};
  pointer-events: ${ props => props.pointerEvent};

  &:hover{
    border-color: ${props => props.color};
  }

  &:focus{
    outline: none !important;
    border-color: ${props => props.color};
    box-shadow: 0 0 5px ${props => props.color};
  }


  padding-left: 20px;
`;

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
