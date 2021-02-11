import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputNumber, StyledInputDiv } from './StyledInputNumber';
import { validationsInputNumber, validateNumbers, formatter } from './validationsInputNumber';

/**
 * Component that display a input which values can be only numbers, with a some styles by default.
 * This functional component uses a specific function that check the variables and convert every props in a concrete
 * value to give it certain features. Note that to develop this component, was used Styled
 * Component library to give dinamic styles according 'props'. Please, watch the validationsInputNumber.js
 * file to know more about the validations. The conditional styles are in StyledInputNumber.js . Both are in
 * the root of this folder.
 * @param {prefix, border, size, disabled, color, placeholder, formatter, value, onChange, theme} props
 */

const InputNumber = (props) => {

  const sources = validationsInputNumber(props);

  const validateNumbersOnInput = (e) => {

    let value = e.target.value.toString();
    value = value.replace(/[^0-9\-.]/g, '');

    // Management minus sign
    if ( value.includes('-') &&  value.lastIndexOf('-') !== 0 ) {
      value = value.replace(/[^0-9.]/g, '');
    }

    // Management extra point
    let count = 0;
    value = value.replace(/\./g, (match)=>{
      count ++;
      return (count === 2) ? "" : match;
    });

    if ( props.formatter === "true") {
      value = formatter(value);
    }

    e.target.value = value;
  }

  return (
    <StyledInputDiv fontSize={sources.fontSize} prefix={sources.prefix} >
          {
            props.onChange?
              <StyledInputNumber
                type="text"
                placeholder={props.placeholder}
                value={validateNumbers(props)}

                onChange = {(e)=>{
                  props.onChange(e, e.target.value.replace(/(,*)/g, '').replace(/[^0-9\-.]/g, ''));
                }}
                {...sources}
              />
              :
              <StyledInputNumber
                type="text"
                placeholder={props.placeholder}
                onInput = { validateNumbersOnInput }
                {...sources}
              />
          }


    </StyledInputDiv>
  )
}

InputNumber.propTypes = {
  prefix: PropTypes.string,
  border: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  formatter: PropTypes.string,
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

export default InputNumber;
