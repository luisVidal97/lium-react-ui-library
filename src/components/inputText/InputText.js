import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledInputText } from './StyledInputText';
import { validationsInputText } from './validationsInputText';

const InputText = (props) => {

  const sources = validationsInputText(props);

  return (
    <Fragment>
      <StyledInputText
        type="text"
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        value={props.value}
        onChange = {props.onChange}
        {...sources}
      />
    </Fragment>
  )
}

InputText.propTypes = {
  border: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputText;
