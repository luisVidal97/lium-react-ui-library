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
}

export default Button;
