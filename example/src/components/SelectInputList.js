import React, { useState } from 'react';
import { SelectInput } from 'lium-react-ui-library';

export const SelectInputList = () => {

  const [selectons, setSelectons] = useState([]);
  const [array, setArray] = useState([
    {
      id: 'USA',
      value: 'United States'
    },
    {
      id: 'COL',
      value: 'Colombia'
    }
  ])


  const axt = (items) => {
    setSelectons(items);
    console.log(items)
  }

  return (
    <div>
      <h4> title="" | items={`[{ id:"123", value:"Hello" }]`} | multiSelect={`{true}`} | onSelectItems={`() =>{}`} </h4>
      <SelectInput title="Select your country" items={array} multiSelect={true} onSelectItems={ axt }/>
      <SelectInput title="Select your country" items={array} multiSelect={false} onSelectItems={ axt }/>
    </div>
  )
}
