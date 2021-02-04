import {colors, forms, heightsInputText, borderRadius, customizeTheme} from '../globalVariables'


export const validations = ( {text, disabled: disabledBtn, shape, color, size, border, themes} ) =>{

  let colorsComponent  = JSON.parse(JSON.stringify(colors));
  if (themes) {
    colorsComponent = customizeTheme(themes, JSON.parse(JSON.stringify(colors)));
  }

  text = text || '';
  shape = shape?
    forms.find(item => item === shape) || 'contained'
    : 'contained';

  color = color?
    colorsComponent[color] || colorsComponent['primary']
    : colorsComponent['primary'];

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


  const shapeSize = size && heightsInputText[size]?
  heightsInputText[size].shape
  : heightsInputText['medium'].shape;

  const fontSize = size && heightsInputText[size]?
  heightsInputText[size].font
  : heightsInputText['medium'].font;

  let borderRadiusBtn = border && borderRadius[border]?
    borderRadius[border]
    :
    borderRadius['normal'];


  return {
    text,
    shape,
    fontSize,
    shapeSize ,
    overallColor,
    backgroundBtn,
    backgroundBtnHover,
    borderBtn,
    borderBtnHover,
    cursor,
    borderRadiusBtn,
  };
}
