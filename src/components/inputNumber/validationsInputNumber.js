import {colors, heightComponents, borderRadius, customizeTheme} from '../globalVariables'


export const validationsInputNumber = ( { prefix, disabled: disabledInputText, color, size, border, themes} ) =>{

  let colorsComponent  = JSON.parse(JSON.stringify(colors));
  if (themes) {
    colorsComponent = customizeTheme(themes, JSON.parse(JSON.stringify(colors)));
  }


  prefix = prefix?
    prefix.charAt(0)
    : '';

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


export const formatter = ( value ) => {
  if( value.includes('.') ){
    const array = value.split('.');
    return array[0].replace(/(,*)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') +'.'+ array[1];

  }else {
    return value.replace(/(,*)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}


export const validateNumbers = (props) => {

  if(!props.value) {
    return '';
  }

  let value = props.value.toString();
  value = value.replace(/[^0-9\-.]/g, '');

  // Management minus sign
  if ( value.includes('-') &&  value.lastIndexOf('-') !== 0 ) {
    value = value.replace(/[^0-9.]/g, '');
  }

  // Management extra point
  let count = 0;
  value = value.replace(/\./g, (match)=>{
    count ++;
    return (count === 2) ? "" : match;
  });

  if ( props.formatter === "true") {
    value = formatter(value);
  }

  return value;
}

