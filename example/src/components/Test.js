import React from 'react';
import { Button } from 'lium-react-ui-library'

export const Test = () => {


  const simulatedEvent = () =>{
    console.log("object")
  }

  return (
    <div>
      <Button text="test" onClick={ simulatedEvent }/>
    </div>
  )
}
