import React, { useState } from 'react';
import { InputNumber } from 'lium-react-ui-library';

const theme = {
  primary: {
    normal: '#bf00ff',
    hover: '#400554',
  },
  secondary: {
    normal: '#0ac9ff',
    hover: '#196d84',
  },
  danger: {
      normal: '#ff0000',
      hover: '#cc0000',
  },
}


export const InputNumberList = () => {

  const [state, setState] = useState("1000");


  return (
    <>
      <div>
        <InputNumber placeholder="primary" themes={theme} color="primary"/>
        <InputNumber placeholder="secondary" themes={theme} color="secondary"/>
        <InputNumber placeholder="danger" color="danger"/>
        <InputNumber placeholder="success" color="success"/>
        <InputNumber placeholder="warning" color="warning"/>
        <InputNumber placeholder="dark" color="dark"/>
        <InputNumber placeholder="disabled" disabled="true"/>
      </div>
      <div>
        <InputNumber prefix='$' placeholder="primary" color="primary"/>
        <InputNumber prefix='T' placeholder="secondary" color="secondary"/>
        <InputNumber prefix='@' placeholder="danger" color="danger"/>
        <InputNumber prefix='T' placeholder="success" color="success"/>
        <InputNumber prefix='%' placeholder="warning" color="warning"/>
        <InputNumber prefix='*' placeholder="dark" color="dark"/>
      </div>

      <div>
        <InputNumber prefix='$' formatter='true' size='small' value={state} onChange={ (e, number) => { setState(number)}}/>
        <InputNumber prefix='$' formatter='true' size='medium'/>
        <InputNumber prefix='$' formatter='true' size='large'/>
      </div>
    </>
  )
}
