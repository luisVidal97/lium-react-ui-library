# lium-react-ui-library

> React UI library made for a part of own challenge.

[![NPM](https://img.shields.io/npm/v/lium-react-ui-library.svg)](https://www.npmjs.com/package/lium-react-ui-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


This is a simple UI library for React which one has 5 implemented components:

1. Button
2. Input Text
3. Input Number
4. Select Input
5. Autocomplete

If you want to know furthermore, please visit the (Demo application repositiory)[https://github.com/luisVidal97/demo-lium-library] or visit the (official page)[https://vibrant-joliot-40e6e6.netlify.app/].

## Install

```bash
npm install --save lium-react-ui-library
```

## Usage

```jsx
import React, { Component } from 'react';

import { Button, InputText, InputNumber, SelectInput, AutocompleteInput } from 'lium-react-ui-library';

class Example extends Component {
  render() {
    return (
      <>
        <Button text="Click here!"/>
        <InputText placeholder="I am a beautiful library"/>
        <InputNumber placeholder="And I am here to help you,"/>
        <SelectInput title="only use my features"/>
        <AutocompleteInput placeholder="And have fun!"/>
      </>
    );
  }
}
```
Like you could watch, you only have to install this library in your project and then, import any component you want to use. It is not required to import any file of css to give them style, because they have a default and custom styles.
Fast, simple and easy peasy. Just test it!

## Developed with 🛠️

* [create-react-library](https://www.npmjs.com/package/create-react-library) - Libary to create more React libraries
* [JavaScript](https://www.typescriptlang.org/) - Pogramming language
* [styled components](https://styled-components.com/) - Used library to created styles dynamically, without using any file of css.

Inside the root directory, src/components path, you can find a folder with each component. Each one has  its own main file, which one is the name of the component. Then, you can find a file for styles and other file for validations. The last one, it validates all props and transform the data in variables that the component can use.
Besides, each component has its own test file in the sr/test folder.

## Authors ✒️

* **Luis Fernando Cruces** - luisfcv97@gmail.com

If you have any recomendation or something to contribute, please let me know sending a message! I will be very eager to receive it.


## License

MIT © [luisVidal97](https://github.com/luisVidal97)
