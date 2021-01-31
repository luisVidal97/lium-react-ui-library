import {colors, heightsInputText, borderRadius} from '../globalVariables'


export const validationsInputNumber = ( { prefix, disabled: disabledInputText, color, size, border} ) =>{

  prefix = prefix?
    prefix.charAt(0)
    : '';

  const shapeSize = size && heightsInputText[size]?
  heightsInputText[size].shape
  : heightsInputText['medium'].shape;

  const fontSize = size && heightsInputText[size]?
  heightsInputText[size].font
  : heightsInputText['medium'].font;

  color = color && colors[color]?
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
    color = 'transparent';
  }

  return {
    prefix,
    shapeSize,
    fontSize,
    color,
    border,
    backgroundColor,
    pointerEvent,
  };
}

