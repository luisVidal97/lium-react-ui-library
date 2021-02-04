import React, {Fragment} from 'react';
import { StyledButton } from './StyledButton';
import { validations } from './validationsButton';
import PropTypes from 'prop-types';

const Button = (props) => {

  const source = validations( props );

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
