import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputNumber } from './StyledInputNumber';
import { StyledInputDiv } from './StyledInputDiv';
import { validationsInputNumber, validateNumbers, formatter } from './validationsInputNumber';


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
