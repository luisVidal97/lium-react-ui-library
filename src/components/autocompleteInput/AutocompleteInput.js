import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledInputText, StyledList, StyledInputListItem } from './StyledInputAutocomplete';
import { validationsInputAutocomplete } from './validationsInputAutoComplete';

/*
  This is an simple input with a extra functionality to suggest different words depending on you
  are writing. This is a controlled component that has his own state. Notice, there are a prop very
  important: ownItems. This is an array with the word that the user want to show like suggestions. If
  is undefined, the component will consume api that fetch similar words.

*/
const AutocompleteInput = (props) => {

  const [suggestions, setSuggestions] = useState([]);
  const [items, setItems] = useState([]);
  const [inpuText, setInpuText] = useState('');

  const sources = validationsInputAutocomplete(props);


  useEffect(() => {
    if(props.ownItems){
      const newList = [...props.ownItems]
      setItems(newList);
    }else {
      // https://www.datamuse.com/api/
      fetch(`https://api.datamuse.com/sug?s=${inpuText}`)
        .then( response => response.json() )
        .then( data => {
          const array = data.map(item => item.word);
          setItems(array);
        });
    }
  }, [inpuText])



  const handleOnChange = ({target}) =>{
    const value = target.value;
    let choosenSuggestions = [];
    if (value.length > 0){
      const reguex = new RegExp(`^${value}`,'i');
      choosenSuggestions = items.sort().filter(v => reguex.test(v));
    }
      setSuggestions(choosenSuggestions);
      setInpuText(value);
  }

  const renderSuggestions = ()  => {

    if (suggestions.length > 0){
      return (
        <StyledList>
        {
          suggestions.map( item =>
            <StyledInputListItem key={item} onClick={() => choosenSuggestions(item)}>{item}</StyledInputListItem>
          )
        }
        </StyledList>
      );
    }else {
      return null;
    }
  }

  const choosenSuggestions = (value) => {
    setSuggestions([]);
    setInpuText(value);
  }

  return (
    <div style={{position:'relative'}}>
      <StyledInputText
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        {...sources}
        value={inpuText}
        onChange={ (e)=> {
          handleOnChange(e);
          if(props.onChange) props.onChange(e);
        }}
        onKeyPress={ (e)=> choosenSuggestions(e.target.value) }
      />

      {
        renderSuggestions()
      }

    </div>
  )
}

AutocompleteInput.propTypes = {
  border: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.string,
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


export default AutocompleteInput;
