import React from 'react';
import { Button } from 'lium-react-ui-library';

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

export const ButtonList = () => {
  return (
    <div>

      <div>
        <Button color="primary" themes={theme} text="primary" />
        <Button color="secondary"text="secondary" />
        <Button color="danger"text="danger" />
        <Button color="success"text="success" />
        <Button color="warning"text="warning" />
        <Button color="dark" text="dark" />
        <Button disabled="true" text="disabled" />
      </div>

      <br/>

      <div>
        <Button shape="outlined" color="primary" text="primary" />
        <Button shape="outlined" color="secondary"text="secondary" />
        <Button shape="outlined" color="danger"text="danger" />
        <Button shape="outlined" color="success"text="success" />
        <Button shape="outlined" color="warning"text="warning" />
        <Button shape="outlined" color="dark" text="dark" />
        <Button shape="outlined" disabled="true" text="disabled" />
      </div>

      <br/>

      <div>
        <Button border="none" shape="outlined" color="primary" text="primary" />
        <Button border="normal" shape="outlined" color="secondary"text="secondary" />
        <Button border="strong" shape="outlined" color="danger"text="danger" />
      </div>

      <br/>

      <div>
        <Button size="small" text="small" />
        <Button size="medium" text="medium" />
        <Button size="large" text="large" />

        <Button size="small" shape="outlined" text="small" />
        <Button size="medium" shape="outlined" text="medium" />
        <Button size="large" shape="outlined" text="large" />
      </div>

    </div>
  )
}
