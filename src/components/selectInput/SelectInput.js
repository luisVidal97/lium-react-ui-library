import React, { useState } from 'react';

const SelectInput = ({title, items, multiSelect = false}) => {

  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () =>{
    setOpen(!open);
  }

  return (
    <select>
      {
        props.items.map(item => <option>{item}</option>)
      }
    </select>
  );
}


export default SelectInput;
