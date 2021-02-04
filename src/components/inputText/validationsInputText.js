import {colors, heightsInputText, borderRadius, customizeTheme} from '../globalVariables'


export const validationsInputText = ( { disabled: disabledInputText, color, size, border, themes} ) =>{

  let colorsComponent  = JSON.parse(JSON.stringify(colors));
  if (themes) {
    colorsComponent = customizeTheme(themes, JSON.parse(JSON.stringify(colors)));
  }

  const shapeSize = size && heightsInputText[size]?
  heightsInputText[size].shape
  : heightsInputText['medium'].shape;

  const fontSize = size && heightsInputText[size]?
  heightsInputText[size].font
  : heightsInputText['medium'].font;

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

  return {
    shapeSize,
    fontSize,
    color,
    border,
    backgroundColor,
    pointerEvent,
  };
}

