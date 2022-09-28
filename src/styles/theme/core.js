export const COLORS = {
  // General
  black: '#000000',
  white: '#ffffff',

  // Black
  'black-t-lighten1': 'rgba(0,0,0,0.75)',
  'black-t-lighten2': 'rgba(0,0,0,0.50)',
  'black-t-lighten3': 'rgba(0,0,0,0.25)',
  'black-t-lighten4': 'rgba(0,0,0,0.15)',
  'black-t-lighten5': 'rgba(0,0,0,0.10)',
  'black-t-lighten6': 'rgba(0,0,0,0.05)',

  // White
  'white-t-lighten1': 'rgba(255,255,255,0.65)',
  'white-t-lighten2': 'rgba(255,255,255,0.50)',
  'white-t-lighten3': 'rgba(255,255,255,0.25)',
  'white-t-lighten4': 'rgba(255,255,255,0.15)',
  'white-t-lighten5': 'rgba(255,255,255,0.10)',
  'white-t-lighten6': 'rgba(255,255,255,0.05)',

  // Social media
  'vipps-default': '#fe5c24',

  // Primary
  'primary-default': '#766bd9',
  'primary-lighten-1': '#8679dd',
  'primary-lighten-2': '#9587e1',
  'primary-lighten-3': '#a395e5',
  'primary-lighten-4': '#DCBDCC',
  'primary-lighten-5': '#E6D0DB',
  'primary-lighten-6': '#F3E8ED',
  'primary-lighten-7': '#FAF6F8',
  'primary-light': '#c6dbf6',

  // Secondary
  'secondary-default': '#C18AA4',
  'secondary-darken-1': '#06B8BC',
  'secondary-lighten-1': '#40EEF2',
  'secondary-lighten-2': '#7FF3F6',
  'secondary-lighten-3': '#BFF9FA',
  'secondary-lighten-4': '#D9FCFD',
  'secondary-lighten-5': '#E5FCFD',
  'secondary-lighten-6': '#F2FEFE',

  // Grey PURE
  'grey-1': '#2D2D2D',
  'grey-2': '#393939',
  'grey-3': '#414141',
  'grey-4': '#030b17',
  'grey-5': '#5b6068',
  'grey-6': '#81858b',
  'grey-7': '#c0c2c5',
  'grey-8': '#d9dbdc',
  'grey-9': '#e5e6e7',
  'grey-10': '#f2f3f3',

  // Grey TRANSPARENT
  'grey-t-1': 'rgba(35, 31, 32, 0.6)',
  'grey-t-2': 'rgba(0,0,0,0.75)',
  'grey-t-3': 'rgba(3, 11, 23, 0.75)',
  'grey-t-4': 'rgba(3, 11, 23, 0.65)',
  'grey-t-5': 'rgba(3, 11, 23, 0.50)',
  'grey-t-6': 'rgba(3, 11, 23, 0.25)',
  'grey-t-7': 'rgba(3, 11, 23, 0.15)',
  'grey-t-8': 'rgba(3, 11, 23, 0.10)',
  'grey-t-9': 'rgba(3, 11, 23, 0.05)',
  'grey-t-10': 'rgba(3, 11, 23, 0.05)',

  // Success
  'success-default': '#52c41a',
  'success-lighten-1': '#8ed96a',
  'success-lighten-2': '#a8e18c',
  'success-lighten-3': '#d4f0c6',
  'success-lighten-4': '#e5f6dd',
  'success-lighten-5': '#edf9e8',
  'success-lighten-6': '#f6fcf3',

  // Warning
  'warning-default': '#faad14',
  'warning-lighten-1': '#fcca66',
  'warning-lighten-2': '#fcd689',
  'warning-lighten-3': '#feeac4',
  'warning-lighten-4': '#fef3dc',
  'warning-lighten-5': '#fef7e7',
  'warning-lighten-6': '#fffbf3',

  // Error
  'danger-default': '#f5222d',
  'danger-lighten-1': '#f86f76',
  'danger-lighten-2': '#fa9096',
  'danger-lighten-3': '#fcc8ca',
  'danger-lighten-4': '#fedee0',
  'danger-lighten-5': '#fee8ea',
  'danger-lighten-6': '#fef4f4',

  // Info
  'info-default': '#1d6fdc',
  'info-lighten-1': '#6ca1e8',
  'info-lighten-2': '#8eb7ed',
  'info-lighten-3': '#c6dbf6',
  'info-lighten-4': '#ddeafa',
  'info-lighten-5': '#e8f0fb',
  'info-lighten-6': '#f3f8fd',

  // Gold
  'gold-default': '#EBBB74'
}

export const FONT_FAMILIES = {
  heading: 'SFUIText-Regular',
  body: 'SFUIText-Regular',
  regular: 'SFUIText-Regular',
  semibold: 'SFUIText-Semibold'
}

export const FONT_WEIGHTS = {
  bold: '700',
  semibold: '600',
  medium: '500',
  regular: '400',
  light: '300'
}

export const FONT_SIZES = {
  h1: 34,
  h2: 28,
  h3: 22,
  h4: 20,
  h5: 17,
  body: 17,
  callout: 16,
  subhead: 15,
  footnote: 13,
  caption1: 12,
  caption2: 11
}

export const LINE_HEIGHTS = {
  h1: 41,
  h2: 34,
  h3: 28,
  h4: 25,
  h5: 22,
  body: 22,
  callout: 21,
  subhead: 20,
  footnote: 18,
  caption1: 16,
  caption2: 13
}

export const ICON_SIZES = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  lg2: 36,
  xl: 40,
  xxl: 48,
  xxxl: 64
}

export const BORDER_RADIUSES = {
  sharp: 0,
  xs: 4,
  sm: 10,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  round: 50
}

const SHADOW_OFFSETS = { DEFAULT: { width: 2, height: 2 } }
export const SHADOWS = {
  xs: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: SHADOW_OFFSETS.DEFAULT
  },
  sm: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: SHADOW_OFFSETS.DEFAULT
  },
  md: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.6,
    shadowRadius: 8,
    shadowOffset: SHADOW_OFFSETS.DEFAULT
  },
  lg: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.8,
    shadowRadius: 16,
    shadowOffset: SHADOW_OFFSETS.DEFAULT
  },
  xl: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    shadowOffset: SHADOW_OFFSETS.DEFAULT
  }
}

export const CORE = {
  COLORS,
  FONT_FAMILIES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  FONT_SIZES,
  ICON_SIZES,
  BORDER_RADIUSES,
  SHADOWS
}

export default CORE
