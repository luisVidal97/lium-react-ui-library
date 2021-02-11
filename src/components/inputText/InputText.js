import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledInputText } from './StyledInputText';
import { validationsInputText } from './validationsInputText';

/**
 * Component that display a input which values can be password or text, with a some styles by default.
 * This functional component uses a specific function that check the variables and convert every props in a concrete
 * value to give it certain features. Note that to develop this component, was used Styled
 * Component library to give dinamic styles according 'props'. Please watch the validationsInputText.js
 * file to know more about the validations. The conditional styles are in StyledInputText.js . Both are in
 * the root of this folder.
 * @param {border, size, disabled, color, placeholder, maxLength, type, value, onChange, theme} props
 */

const InputText = (props) => {

  const sources = validationsInputText(props);

  return (
    <Fragment>
      <StyledInputText
        type={sources.type}
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
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
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

export default InputText;
