const {Dimensions} = require('react-native');

const {width, height} = Dimensions.get('window');

// GREEN SHADE
// primary: '#08594A',
// lightPrimary: '#A5E5D8',
// title: '#212F3C',
// transparent: 'rgba(8, 89, 74, 0.9)',

export const COLORS = {
  // primary: '#633974',
  // lightPrimary: '#EBDEF0',
  // title: '#482755',
  // transparent: 'rgba(99,57,116,0.9)',

  primary: '#08594A',
  lightPrimary: '#A5E5D8',
  title: '#212F3C',
  transparent: 'rgba(8, 89, 74, 0.9)',

  // common color
  grey: '#585656',
  lightGrey: '#DCDADD',
  darkGrey: '#585656',
  white: '#FFFFFF',
  yellow: 'yellow',
  black: '#000',
};

export const SIZES = {
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,

  width,
  height,
};

export const FONTWEIGHT = {
  bold: 'bold',
  normal: 'normal',
  weight500: '500',
  weight700: '700',
};
