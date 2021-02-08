import React, { useState } from 'react';
import { InputText } from 'lium-react-ui-library';

export const InputTextList = () => {

  const [state, setstate] = useState("hello");

  return (
    <>
      <div>
        <InputText placeholder="primary" color="primary"/>
        <InputText placeholder="primary" color="primary"/>
        <InputText placeholder="secondary" color="secondary"/>
        <InputText placeholder="danger" color="danger"/>
        <InputText placeholder="success" color="success"/>
        <InputText placeholder="warning" color="warning"/>
        <InputText placeholder="dark" color="dark"/>
        <InputText placeholder="disabled" disabled="true"/>
      </div>
      <br />
      <div>
        <InputText size="small" placeholder="small"/>
        <InputText size="medium" placeholder="medium" />
        <InputText size="large" placeholder="large" />
      </div>
      <br />
      <div>
        <InputText border="none" placeholder="small"/>
        <InputText border="normal" placeholder="medium" />
        <InputText border="strong" placeholder="large" />
        <InputText border="strong" placeholder="large" onChange={(e) =>{ setstate(e.target.value) }} value={state}/>
      </div>
    </>
  )
}
