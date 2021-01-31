
const forms = ['contained', 'outlined'];

const heights = {
  large: '50px',
  medium: '40px',
  small: '30px',
}

const borderRadius = {
  strong: '20px',
  normal: '10px',
  none: '0px'
}

const heightsInputText = {
  large: {
    shape: '40px',
    font: '1.2rem'
  },
  medium:  {
    shape: '32px',
    font: '1rem'
  },
  small: {
    shape: '24px',
    font: '.8rem'
  },
}


const colors = {
  primary: {
      normal: '#115293',
      hover: '#0A0A36',
  },
  secondary: {
    normal: '#DC004E',
    hover: '#9A0036',
  },
  danger: {
      normal: '#ff0000',
      hover: '#cc0000',
  },
  warning: {
    normal: '#ffea05',
    hover: '#e2d006'
  },
  success: {
    normal: '#06c920',
    hover: '#019e16'
  },
  dark: {
    normal: '#000000',
    hover: '#686767',
  },
};

const defaultStyle = {
  normal: '#000000',
  hover: '#686767',
}

export { forms, borderRadius, heights, heightsInputText, colors, defaultStyle } ;
