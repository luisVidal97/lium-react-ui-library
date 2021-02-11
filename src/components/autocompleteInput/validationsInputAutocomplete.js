import {colors, heightComponents, borderRadius, customizeTheme} from '../globalVariables'


export const validationsInputAutocomplete= ( { disabled: disabledInputText, color, size, border, themes} ) =>{

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

  let borderColor = color && colorsComponent[color]?
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
    borderColor = 'transparent';
  }

  return {
    shapeSize,
    fontSize,
    borderColor,
    border,
    backgroundColor,
    pointerEvent,
  };
}

