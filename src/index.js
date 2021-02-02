import React from 'react';
import styles from './styles.module.css';


export { default as Button }  from './components/button/Button';
export { default as InputText }  from './components/inputText/InputText';
export { default as InputNumber }  from './components/inputNumber/InputNumber';
export { default as SelectInput }  from './components/selectInput/SelectInput';
export { default as AutocompleteInput} from './components/autocompleteInput/AutocompleteInput';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


