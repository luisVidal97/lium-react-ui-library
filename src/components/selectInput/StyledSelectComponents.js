import styled from 'styled-components';


export const StyledDivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 5px;
`;

export const StyledTitle = styled.p`
  margin: 0px;
  margin-right: 10px;
`;

export const StyledList = styled.ul`
  list-style: none;
  background-color: white;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 100;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.3) !important;
  top: 50px;
  width: 100%;
  max-height: 300px;
  overflow: auto;
`;


export const StyledButton = styled.button`
  display: flex;
  background-color: ${props => props.color};
  border: 0;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;

  justify-content: space-between;
  padding: 15px 20px 15px 20px;
  text-align: left;
  width: 100%;

  &:hover, &:focus {
    background-color: #ccc;
    cursor: pointer;
    font-weight: bold;
  }
  &:focus {
    background-color: ${props => props.color};
  }
`;

