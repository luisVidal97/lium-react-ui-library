import React from 'react';
import { shallow, mount } from'enzyme';

import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { heightsInputText, colors, borderRadius } from '../components/globalVariables';
import SelectInput from '../components/selectInput/SelectInput';
import {StyledTitle, StyledDivTitle, StyledList, StyledButton, } from '../components/selectInput/StyledSelectComponents';


describe('Tests over <SelectInput/>: features and behavior', () => {

  let wrapper, tree;
  const title = 'Select Exchange';
  const list = [
    { id: '1', value: 'EUR'},
    { id: '2', value: 'LBP'},
    { id: '3', value: 'CAN'},
    { id: '4', value: 'USD'},
  ];


  let valueTest;
  const onSelectItems = (selected) => {
    valueTest = selected;
  };

  test('should show <SelectInput/> successfully', () => {
    wrapper = shallow(<SelectInput items={list} onSelectItems={onSelectItems}/>);
    expect( wrapper ).toMatchSnapshot();
  });



  test('should show select with title and the items', () => {

    wrapper = mount(<SelectInput items={list} onSelectItems={onSelectItems} title={title}/>);

    const titleSelect  = wrapper.find(StyledTitle).text();
    expect(titleSelect).toBe(title);

    wrapper.find(StyledDivTitle).simulate('click');

    const option1 = wrapper.find(StyledButton).at(0).text();
    const option2 = wrapper.find(StyledButton).at(1).text();
    const option3 = wrapper.find(StyledButton).at(2).text();
    const option4 = wrapper.find(StyledButton).at(3).text();

    expect(option1).toBe(list[0].value);
    expect(option2).toBe(list[1].value);
    expect(option3).toBe(list[2].value);
    expect(option4).toBe(list[3].value);

    wrapper.find(StyledButton).at(0).simulate('click');

    wrapper.find(StyledDivTitle).simulate('click');

  });


  test('should select one item and return a simple element in onSelectInput', () => {

    wrapper = mount(<SelectInput items={list} onSelectItems={onSelectItems} title={title}/>);
    wrapper.find(StyledDivTitle).simulate('click');
    wrapper.find(StyledButton).at(0).simulate('click');
    wrapper.find(StyledDivTitle).simulate('click');
    expect(valueTest).toEqual( [ { id: '1', value: 'EUR' } ]);

    wrapper.find(StyledDivTitle).simulate('click');
    wrapper.find(StyledButton).at(2).simulate('click');
    wrapper.find(StyledDivTitle).simulate('click');
    expect(valueTest).toEqual([ { id: '3', value: 'CAN'} ]);

  });


  test('should select several items and return a array of selected elements in onSelectInput', () => {

    wrapper = mount(<SelectInput items={list} onSelectItems={onSelectItems} title={title} multiSelect={true}/>);
    wrapper.find(StyledDivTitle).simulate('click');
    wrapper.find(StyledButton).at(0).simulate('click');
    wrapper.find(StyledButton).at(2).simulate('click');
    wrapper.find(StyledButton).at(3).simulate('click');
    wrapper.find(StyledDivTitle).simulate('click');
    expect(valueTest).toEqual([{ id: '1', value: 'EUR'}, { id: '3', value: 'CAN'}, { id: '4', value: 'USD'}]);

  });

});
