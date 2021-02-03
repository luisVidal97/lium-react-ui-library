import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledInputText, StyledList, StyledInputListItem } from './StyledInputAutocomplete';
import { validationsInputAutocomplete } from './validationsInputAutoComplete';

const AutocompleteInput = (props) => {

  const [suggestions, setSuggestions] = useState([]);
  const [items, setItems] = useState([]);
  const [inpuText, setInpuText] = useState('');

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

  const sources = validationsInputAutocomplete(props);


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
}


export default AutocompleteInput;
