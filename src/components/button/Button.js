import React, {Fragment} from 'react';
import { StyledButton } from './StyledButton';
import { validationsButton } from './validationsButton';
import PropTypes from 'prop-types';

/**
 * Component that display a button with a some styles by default. This functional component
 * uses a specific function that check the variables and convert every props in a concrete
 * value to give it certain features. Note that to develop this component, was used Styled
 * Component library to give dinamic styles according 'props'. Please watch the validationsButton.js
 * file to know more about the validations. The conditional styles are in StyledButton.js . Both are in
 * the root of this folder.
 * @param {size, disabled, shape, text, color, onClick, border, theme} props
 */

const Button = (props) => {

  const source = validationsButton( props );

  return (
    <Fragment>
    {
      props.onClick && props.disabled !=='true'?
        <StyledButton {...source} onClick={props.onClick}>
          { source.text }
        </StyledButton>
      :
        <StyledButton {...source}>
          { source.text }
        </StyledButton>
    }
    </Fragment>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.string,
  shape: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  border: PropTypes.string,
  theme: PropTypes.shape({
    primary: PropTypes.shape({
      normal: PropTypes.string,
      hover: PropTypes.string,
    }),
    secondary: PropTypes.shape({
      normal: PropTypes.string,
      hover: PropTypes.string,
    }),
    danger: PropTypes.shape({
      normal: PropTypes.string,
      hover: PropTypes.string,
    }),
    warning: PropTypes.shape({
      normal: PropTypes.string,
      hover: PropTypes.string,
    }),
    success: PropTypes.shape({
      normal: PropTypes.string,
      hover: PropTypes.string,
    }),
    dark: PropTypes.shape({
      normal: PropTypes.string,
      hover: PropTypes.string,
    }),
  }),
}

export default Button;
