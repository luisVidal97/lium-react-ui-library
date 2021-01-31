import React  from 'react';
import PropTypes from 'prop-types';
import { StyledInputNumber } from './StyledInputNumber';
import { StyledInputDiv } from './StyledInputDiv';
import { validationsInputNumber } from './validationsInputNumber';

const InputNumber = (props) => {


  const sources = validationsInputNumber(props);

  const validateNumbers = (e) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '');

    if (props.formatter === "true"){

      if( e.target.value.includes('.')){
        const array = e.target.value.split('.');
        e.target.value =array[0].replace(/(,*)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') +'.'+ array[1];

      }else {
        e.target.value = e.target.value.replace(/(,*)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
    }
  }

  return (
    <StyledInputDiv fontSize={sources.fontSize} prefix={sources.prefix} >
      {
        props.onChange?
          <StyledInputNumber
            type="text"
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            name={props.name}
            onInput = { validateNumbers }
            onChange = {(e)=>{
              props.onChange(e, e.target.value.replace(/(,*)/g, ''));
            }}
            {...sources}
          />
        :
          <StyledInputNumber
            type="text"
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            name={props.name}
            onInput = { validateNumbers }
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
  text: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputNumber;
