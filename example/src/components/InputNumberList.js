import React from 'react';
import { InputNumber } from 'lium-react-ui-library';

export const InputNumberList = () => {


  return (
    <>
      <div>
        <InputNumber placeholder="primary" color="primary"/>
        <InputNumber placeholder="secondary" color="secondary"/>
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
        <InputNumber prefix='$' formatter='true' size='small'/>
        <InputNumber prefix='$' formatter='true' size='medium'/>
        <InputNumber prefix='$' formatter='true' size='large'/>
      </div>
    </>
  )
}
