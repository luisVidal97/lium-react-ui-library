import React from 'react';
import { shallow } from'enzyme';

import 'jest-styled-components'
import renderer from 'react-test-renderer'

import { heightComponents, colors } from '../components/globalVariables';
import  Button from '../components/button/Button';
import  {StyledButton} from '../components/button/StyledButton';


describe('Tests over <Button/>: features and behavior', () => {

  let wrapper = shallow(<Button />);
  let tree = renderer.create(<Button />).toJSON();

  test('should show <Button/> successfully', () => {
    wrapper = shallow(<Button />);
    expect( wrapper ).toMatchSnapshot();
  });


  test('should show default style values of button invoking <Button /> component (without props)', () => {
    tree = renderer.create(<Button />).toJSON();
    expect(tree).toHaveStyleRule('color', 'white');
    expect(tree).toHaveStyleRule('height', heightComponents.medium.shape);
    expect(tree).toHaveStyleRule('background-color', colors.primary.normal);
    expect(tree).toHaveStyleRule('background-color', colors.primary.hover, { modifier: ':hover', });
    expect(tree).toHaveStyleRule('cursor', 'pointer', { modifier: ':hover', });
  });

  test('should show default style values of button invoking <Button /> component (with props but wrong values)', () => {
    tree = renderer.create(<Button disabled='hi' size='sm' shape='cover' text='24' moove="large"/>).toJSON();
    expect(tree).toHaveStyleRule('color', 'white');
    expect(tree).toHaveStyleRule('height', heightComponents.medium.shape);
    expect(tree).toHaveStyleRule('background-color', colors.primary.normal);
    expect(tree).toHaveStyleRule('background-color', colors.primary.hover, { modifier: ':hover', });
    expect(tree).toHaveStyleRule('cursor', 'pointer', { modifier: ':hover', });
  });

  test('should show outlined, large and disabled button', () => {
    tree = renderer.create(<Button disabled='true' size='large' shape='outlined' />).toJSON();
    expect(tree).toHaveStyleRule('color', '#E0E0E0');
    expect(tree).toHaveStyleRule('height', heightComponents.large.shape);
    expect(tree).toHaveStyleRule('background-color', 'white');
    expect(tree).toHaveStyleRule('background-color',  'white', { modifier: ':hover', });
    expect(tree).toHaveStyleRule('cursor', 'default', { modifier: ':hover', });
  });

  test('should show "text prop" properly in the button, which it is send through props', () => {
    const helloText = 'Hello world!';
    wrapper = shallow( <Button text={helloText}/> );
    let textBtn = wrapper.find(StyledButton).text();
    expect(textBtn).toBe(helloText);

    wrapper = shallow( <Button /> );
    textBtn = wrapper.find(StyledButton).text();
    expect(textBtn).toBe('');
  });



  test('should execute the function when click the button', () => {

    const doSomething = jest.fn();
    expect( doSomething ).not.toHaveBeenCalled();

    wrapper = shallow( <Button onClick={ doSomething }/> );
    wrapper.find(StyledButton).simulate('click');
    expect( doSomething ).toHaveBeenCalled();

    wrapper.find(StyledButton).simulate('click');
    wrapper.find(StyledButton).simulate('click');
    expect( doSomething ).toHaveBeenCalledTimes(3)

  });


  test('should not execute the function when click the button if it is disabled', () => {

    const doSomething = jest.fn();

    wrapper = shallow( <Button onClick={ doSomething } disabled='true'/> );
    wrapper.find(StyledButton).simulate('click');
    expect( doSomething ).not.toHaveBeenCalled();

  });


});

