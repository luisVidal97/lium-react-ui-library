import {colors, heightsInputText, borderRadius} from '../globalVariables'


export const validationsInputAutocomplete= ( { disabled: disabledInputText, color, size, border} ) =>{

  const shapeSize = size && heightsInputText[size]?
  heightsInputText[size].shape
  : heightsInputText['medium'].shape;

  const fontSize = size && heightsInputText[size]?
  heightsInputText[size].font
  : heightsInputText['medium'].font;

  let borderColor = color && colors[color]?
    colors[color].normal
    :
    colors['primary'].normal;

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

