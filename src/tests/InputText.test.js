import React from 'react';
import { shallow } from'enzyme';

import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { heightsInputText, colors, borderRadius } from '../components/globalVariables';
import InputText from '../components/inputText/InputText';
import {StyledInputText} from '../components/inputText/StyledInputText';

describe('Tests over <InputText/>: features and behavior', () => {

  let wrapper, tree;


  test('should show <Button/> successfully', () => {
    wrapper = shallow(<InputText />);
    expect( wrapper ).toMatchSnapshot();
  });

  test(`should show default style values of text input invoking <InputText /> component (without props).
  Default values = height: 32px; font-size: 1rem; border-radius: 10px; background-color: tranparent; pointer-events: auto;
  input[focus]border-color: #115293;  input[focus]box-shadow: 0 0 5px #115293;
  `, () => {
    tree = renderer.create(<InputText />).toJSON();
    expect(tree).toHaveStyleRule('height', heightsInputText.medium.shape);
    expect(tree).toHaveStyleRule('font-size', heightsInputText.medium.font);
    expect(tree).toHaveStyleRule('border-radius', borderRadius.normal);
    expect(tree).toHaveStyleRule('background-color', 'transparent');
    expect(tree).toHaveStyleRule('pointer-events', 'auto');
    expect(tree).toHaveStyleRule('border-color', colors.primary.normal, { modifier: ':focus', });
    expect(tree).toHaveStyleRule('box-shadow', `0 0 5px ${colors.primary.normal}`, { modifier: ':focus', });
  });

  test('should show default style values of text input invoking <InputText /> (with props but wrong values)', () => {
    tree = renderer.create(<InputText disabled='treu' size='sm' color='green' border='24' moove='large'/>).toJSON();
    expect(tree).toHaveStyleRule('height', heightsInputText.medium.shape);
    expect(tree).toHaveStyleRule('font-size', heightsInputText.medium.font);
    expect(tree).toHaveStyleRule('border-radius', borderRadius.normal);
    expect(tree).toHaveStyleRule('background-color', 'transparent');
    expect(tree).toHaveStyleRule('pointer-events', 'auto');
    expect(tree).toHaveStyleRule('border-color', colors.primary.normal, { modifier: ':focus', });
    expect(tree).toHaveStyleRule('box-shadow', `0 0 5px ${colors.primary.normal}`, { modifier: ':focus', });
  });


  test('should show secondary, large and with strong border input text', () => {
    tree = renderer.create(<InputText color='secondary' size='large' border='strong'/>).toJSON();
    expect(tree).toHaveStyleRule('pointer-events', 'auto');
    expect(tree).toHaveStyleRule('border-color', colors.secondary.normal, { modifier: ':focus', });
    expect(tree).toHaveStyleRule('box-shadow', `0 0 5px ${colors.secondary.normal}`, { modifier: ':focus', });
    expect(tree).toHaveStyleRule('height', heightsInputText.large.shape);
    expect(tree).toHaveStyleRule('font-size', heightsInputText.large.font);
    expect(tree).toHaveStyleRule('border-radius', borderRadius.strong);
    expect(tree).toHaveStyleRule('pointer-events', 'auto');
  });


  test('should show disabled input text', () => {
    tree = renderer.create(<InputText disabled="true" size='small' border="none"/>).toJSON();
    expect(tree).toHaveStyleRule('pointer-events', 'none');
    expect(tree).toHaveStyleRule('background-color', '#E0E0E0');
    expect(tree).toHaveStyleRule('border-radius', borderRadius.none);
    expect(tree).toHaveStyleRule('border-color', 'transparent', { modifier: ':hover', });
    expect(tree).toHaveStyleRule('border-color', 'transparent', { modifier: ':focus', });
    expect(tree).toHaveStyleRule('box-shadow', `0 0 5px transparent`, { modifier: ':focus', });
  });

  test('should not execute function if input text is disabled', () => {
    const doSomething = jest.fn();
    wrapper = shallow( <InputText disabled="true" placeholder="Hello world!" value="Hello" onChange={doSomething}/> );
    wrapper.find(StyledInputText).simulate('click');
    expect(doSomething).not.toHaveBeenCalled();
  });


  test('should change the value of the const if input text change', () => {
    const doSomething = jest.fn();
    const ph = 'email';
    wrapper = shallow( <InputText value='' placeholder={ph} onChange={doSomething}/> );
    wrapper.find(StyledInputText).simulate('change');
    expect(doSomething).toHaveBeenCalled();
    expect( wrapper.find(StyledInputText).props().placeholder).toBe(ph);
  });

});
