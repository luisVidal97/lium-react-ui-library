import React from 'react';
import { shallow, mount } from'enzyme';

import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { heightsInputText, colors, borderRadius } from '../components/globalVariables';
import AutocompleteInput from '../components/autocompleteInput/AutocompleteInput';
import {StyledInputText, StyledInputListItem} from '../components/autocompleteInput/StyledInputAutocomplete';


describe('Tests over <AutocompleteInput/>: features and behavior', () => {

  let wrapper, tree;

  test('should show <AutocompleteInput/> successfully', () => {
    wrapper = shallow(<AutocompleteInput />);
    expect( wrapper ).toMatchSnapshot();
  });


  test(` should show default style values of input invoking <AutocompleteInput /> component (without props)
  Default values = height: 32px; font-size: 1rem; border-radius: 10px; background-color: tranparent; pointer-events: auto;
  input[hover]border-color: #115293; input[focus]border-color: #115293;  input[focus]box-shadow: 0 0 5px #115293;`, () => {

    tree = renderer.create(<AutocompleteInput />).toJSON().children[0];
    expect(tree.type).toBe('input');
    expect(tree).toHaveStyleRule('height', heightsInputText.medium.shape);
    expect(tree).toHaveStyleRule('font-size', heightsInputText.medium.font);
    expect(tree).toHaveStyleRule('background-color', 'transparent');
    expect(tree).toHaveStyleRule('pointer-events', 'auto');
    expect(tree).toHaveStyleRule('border-radius', borderRadius.normal);
    expect(tree).toHaveStyleRule('border-color', colors.primary.normal, { modifier: ':hover' });
    expect(tree).toHaveStyleRule('border-color', colors.primary.normal, { modifier: ':focus' });
    expect(tree).toHaveStyleRule('box-shadow', `0 0 5px ${colors.primary.normal}`, { modifier: ':focus' });
  });

  test('should show default style values of text input invoking <AutocompleteInput /> (with props but wrong values)', () => {
    tree = renderer.create(<AutocompleteInput disabled='treu' size='sm' color='green' border='24' moove='large'/>).toJSON().children[0];
    expect(tree.type).toBe('input');
    expect(tree).toHaveStyleRule('height', heightsInputText.medium.shape);
    expect(tree).toHaveStyleRule('font-size', heightsInputText.medium.font);
    expect(tree).toHaveStyleRule('background-color', 'transparent');
    expect(tree).toHaveStyleRule('pointer-events', 'auto');
    expect(tree).toHaveStyleRule('border-radius', borderRadius.normal);
    expect(tree).toHaveStyleRule('border-color', colors.primary.normal, { modifier: ':hover' });
    expect(tree).toHaveStyleRule('border-color', colors.primary.normal, { modifier: ':focus' });
    expect(tree).toHaveStyleRule('box-shadow', `0 0 5px ${colors.primary.normal}`, { modifier: ':focus' });
  });

  test(`should show style values of text input invoking <AutocompleteInput /> with large size, dark color, strong border,
  55 maxLength and 'Hello' placeholder`, () => {
    const props = {
      size: 'large',
      color: 'dark',
      border:'strong',
      maxLength:'55',
      placeholder: 'Hello'
    }
    tree = renderer.create(<AutocompleteInput  {...props} />).toJSON().children[0];
    expect(tree.type).toBe('input');
    expect(tree.props.maxLength).toBe(props.maxLength);
    expect(tree.props.placeholder).toBe(props.placeholder);
    expect(tree).toHaveStyleRule('height', heightsInputText.large.shape);
    expect(tree).toHaveStyleRule('font-size', heightsInputText.large.font);
    expect(tree).toHaveStyleRule('background-color', 'transparent');
    expect(tree).toHaveStyleRule('pointer-events', 'auto');
    expect(tree).toHaveStyleRule('border-radius', borderRadius.strong);
    expect(tree).toHaveStyleRule('border-color', colors.dark.normal, { modifier: ':hover' });
    expect(tree).toHaveStyleRule('border-color', colors.dark.normal, { modifier: ':focus' });
    expect(tree).toHaveStyleRule('box-shadow', `0 0 5px ${colors.dark.normal}`, { modifier: ':focus' });
  });

  test('should show disabled  <AutocompleteInput /> regardless of color prop', () => {
    tree = renderer.create(<AutocompleteInput disabled='true' size='large' color='success' border='strong' />).toJSON().children[0];
    expect(tree.type).toBe('input');
    expect(tree).toHaveStyleRule('background-color', '#E0E0E0');
    expect(tree).toHaveStyleRule('pointer-events', 'none');
    expect(tree).toHaveStyleRule('height', heightsInputText.large.shape);
    expect(tree).toHaveStyleRule('font-size', heightsInputText.large.font);
    expect(tree).toHaveStyleRule('border-radius', borderRadius.strong);
    expect(tree).toHaveStyleRule('border-color', 'transparent', { modifier: ':hover' });
    expect(tree).toHaveStyleRule('border-color', 'transparent', { modifier: ':focus' });
    expect(tree).toHaveStyleRule('box-shadow', `0 0 5px transparent`, { modifier: ':focus' });
  });

  test('should change input and show items that are given through props like array', () => {
    const list = ['Luis', 'Monica', 'Maximiliam', 'Ricky', 'Mortin'];
    wrapper = mount(<AutocompleteInput ownItems={list} />);
    const input  = wrapper.find(StyledInputText);
    const event = {
      target: {
        value : 'Lu'
      }
    }
    input.simulate('change', event);
    const text  = wrapper.find(StyledInputListItem).at(0).text();
    expect(text).toBe(list[0]);
    const event2 = {
      target: {
        value : 'm'
      }
    }
    input.simulate('change', event2)
    const text2  = wrapper.find(StyledInputListItem).at(0).text();
    const text3  = wrapper.find(StyledInputListItem).at(1).text();
    const text4  = wrapper.find(StyledInputListItem).at(2).text();
    expect(text2).toBe(list[2]);
    expect(text3).toBe(list[1]);
    expect(text4).toBe(list[4]);
  });


})
