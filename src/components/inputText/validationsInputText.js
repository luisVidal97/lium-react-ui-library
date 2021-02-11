import {colors, heightComponents, borderRadius, customizeTheme} from '../globalVariables'


export const validationsInputText = ( { disabled: disabledInputText, color, size, border, themes, type} ) =>{

  let colorsComponent  = JSON.parse(JSON.stringify(colors));
  if (themes) {
    colorsComponent = customizeTheme(themes, JSON.parse(JSON.stringify(colors)));
  }

  const shapeSize = size && heightComponents[size]?
  heightComponents[size].shape
  : heightComponents['medium'].shape;

  const fontSize = size && heightComponents[size]?
  heightComponents[size].font
  : heightComponents['medium'].font;

  color = color && colorsComponent[color]?
    colorsComponent[color].normal
    :
    colorsComponent['primary'].normal;

  border = border && borderRadius[border]?
    borderRadius[border]
    :
    borderRadius['normal'];

  let backgroundColor = 'transparent', pointerEvent = 'auto';
  if (disabledInputText === 'true') {
    backgroundColor = '#E0E0E0' ;
    pointerEvent = 'none'
    color = 'transparent';
  }

  type = (type && type ==='text' || type ==='password') ? type: 'text';

  return {
    shapeSize,
    fontSize,
    color,
    border,
    backgroundColor,
    pointerEvent,
    type
  };
}

