import {colors, forms, heights} from '../globalVariables'


export const validations = ( {text, disabled: disabledBtn, shape, color, size} ) =>{

  text = text || '';
  shape = shape?
    forms.find(item => item === shape) || 'contained'
    : 'contained';

  color = color?
    colors[color] || colors['primary']
    : colors['primary'];

  let overallColor, backgroundBtn, backgroundBtnHover, borderBtn, borderBtnHover ;
  let cursor = 'pointer'
  if ( disabledBtn === 'true' &&  shape === 'contained') {
    overallColor = '#A6A6A6';
    backgroundBtn = '#E0E0E0';
    backgroundBtnHover =  '#E0E0E0';
    borderBtn =  '#E0E0E0';
    borderBtnHover =  '#E0E0E0';
    cursor = 'default';
  } else if(disabledBtn === 'true' &&  shape === 'outlined') {
    overallColor = '#E0E0E0';
    backgroundBtn ='white';
    backgroundBtnHover = 'white';
    borderBtn ='#E0E0E0';
    borderBtnHover = '#E0E0E0';
    cursor = 'default';
  } else if (shape === 'contained'){
    overallColor = 'white';
    backgroundBtn = color.normal;
    backgroundBtnHover = color.hover;
    borderBtn = color.normal;
    borderBtnHover = color.hover;
  } else{
    overallColor = color.normal;
    backgroundBtn ='white';
    backgroundBtnHover = color.hover;
    borderBtn = color.normal;
    borderBtnHover = color.hover;
  }

  size = size?
    heights[size] || heights['medium']
    : heights['medium'];

  return {
    text,
    shape,
    size ,
    overallColor,
    backgroundBtn,
    backgroundBtnHover,
    borderBtn,
    borderBtnHover,
    cursor
  };
}
