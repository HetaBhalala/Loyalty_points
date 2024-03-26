import {Dimensions, Platform} from 'react-native';
export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

let deviceRatio =
  Dimensions.get('window').height / Dimensions.get('window').width;
const isTab = deviceRatio < 1.6;

const getFontSize = size => {
  if (isTab) {
    size = size * 1.4;
  }
  return size;
};


export const spacing = {
  micro: 2,
  nano: 4,
  mini: 6,
  small: 8,
  semiSmall: 10,
  base: 12,
  semi: 14,
  md: 16,
  exMd: 18,
  semiLg: 20,
  exLg: 22,
  exXl: 28,
  semiXl: 30,
  lg: 24,
  xl: 32,
  semiXXL: 38,
  xxl: 45,
  baseX: 48,
  xxxl: 72,
};

export const font = {
  family: {
    poppins600:'Poppins-SemiBold',
    poppins400:'Poppins-Regular',
    raleway600:'Raleway-Bold',
    sans400:'DMSans-Regular',
    sans500:'DMSans-Medium',
    sans700:'DMSans-Bold',
  },
  size: {
    micro: getFontSize(10),
    nano: getFontSize(11),
    mini: getFontSize(12),
    small: getFontSize(13),
    base: getFontSize(14),
    semi: getFontSize(15),
    md: getFontSize(16),
    semiMd: getFontSize(17),
    lg: getFontSize(18),
    semiLg: getFontSize(20),
    semiXl: getFontSize(22),
    semiXXl: getFontSize(23),
    xl: getFontSize(24),
    xxl: getFontSize(27),
    exLg: getFontSize(28),
    xxxl: getFontSize(30),
    exXl: getFontSize(50),
    exXXl: getFontSize(55),
  },
};
