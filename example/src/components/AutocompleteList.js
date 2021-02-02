import React from 'react';
import { AutocompleteInput } from 'lium-react-ui-library';

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '30px'
}

export const AutocompleteList = () => {

  return (
    <div>
      <h4>ownItems={`{['Luis','Nathaly','loco','loquillo']}`} </h4>
      <AutocompleteInput ownItems ={['Luis','Nathaly','loco','loquillo']} onChange={(e)=> console.log(e)} maxLength='3'/>
      <h4>maxLength="5" - Default value: undefined</h4>
      <AutocompleteInput ownItems ={['Luis','Nathaly','loco','loquillo']} onChange={(e)=> console.log(e.target.value)} maxLength='5'/>
      <h4>placeholder:"whatever" - Default value: ""</h4>
      <AutocompleteInput placeholder="whatever"/>
      <h4>disabled:"true" | "false" - Default value: "false"</h4>
      <AutocompleteInput placeholder='disabled'  disabled='true'/>
      <h4>color:"primary" | "secondary" | "danger" | "success" | "warning" | "dark" - Default value:"primary"</h4>
      <div style={styles}>
        <AutocompleteInput placeholder='primary' color='primary'  />
        <AutocompleteInput placeholder='secondary'  color='secondary'  />
        <AutocompleteInput placeholder='danger'  color='danger'/>
        <AutocompleteInput placeholder='success'  color='success'/>
        <AutocompleteInput placeholder='warning'  color='warning'/>
        <AutocompleteInput placeholder='dark'  color='dark'/>
      </div>
      <h4>border:"none" | "normal" | "strong" - Default value: "normal"</h4>
      <div style={styles}>
        <AutocompleteInput placeholder='none' border='none' color='dark'/>
        <AutocompleteInput placeholder='normal' border='normal' color='dark'/>
        <AutocompleteInput placeholder='strong' border='strong' color='dark'/>
      </div>
      <h4>border:"none" | "normal" | "strong" - Default value: "normal"</h4>
      <div style={styles}>
        <AutocompleteInput placeholder='none' size='small' color='dark'/>
        <AutocompleteInput placeholder='normal' size='medium' color='dark'/>
        <AutocompleteInput placeholder='strong' size='large' color='dark'/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
