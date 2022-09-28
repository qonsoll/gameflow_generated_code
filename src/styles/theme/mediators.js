import {
  COLORS as BASE_COLORS,
  BORDER_RADIUSES,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  ICON_SIZES,
  LINE_HEIGHTS,
  SHADOWS
} from './core'

import { Dimensions } from 'react-native'

const CONTAINER_OFFSET = 16
const WINDOW_WIDTH = Dimensions.get('window').width
const CONTAINER_MAX_WIDTH = WINDOW_WIDTH - CONTAINER_OFFSET * 2

const COLORS = {
  ...BASE_COLORS,

  /* Dark */
  'loading-screen-background': '#242729',
  'background-gradient': '#242729',
  'modal-background': 'rgba(89, 89, 89, 0.2)',
  'card-background': 'rgb(54, 57, 59)',
  'page-wrapper-background': '#242729',
  'divider-color': BASE_COLORS['white-t-lighten4'],
  'text-caption-color': BASE_COLORS['grey-6'],
  'text-color': BASE_COLORS.white,
  'status-bar-bg-color': '#242729',
  'status-bar-color': 'light-content',
  // Menu
  'menu-focus-color': BASE_COLORS.white,
  'menu-unfocus-color': BASE_COLORS['white-t-lighten2'],
  'menu-background-color': 'rgb(54, 57, 59)',
  'menu-background-gradient': ['#4776e6', '#8e54e9'],
  // Input
  'input-background': 'rgb(54, 57, 59)',
  'input-background-disabled': '#e4e6e7',
  'input-border-color': 'rgb(54, 57, 59)',
  'input-color': BASE_COLORS.white,
  'input-placeholder-color': BASE_COLORS['grey-6']
  /* End of dark */

  /* Light */
  // 'loading-screen-background': BASE_COLORS.white,
  // 'background-gradient': BASE_COLORS['primary-default'],
  // 'modal-background': 'rgba(0, 0, 0, 0.55)',
  // 'card-background': BASE_COLORS.white,
  // 'page-wrapper-background': '#efeef2',
  // 'status-bar-bg-color': BASE_COLORS['primary-default'],
  // 'status-bar-color': 'dark-content',
  // // Menu
  // 'menu-focus-color': BASE_COLORS.white,
  // 'menu-unfocus-color': BASE_COLORS['white-t-lighten2'],
  // 'menu-background-color': '#4776e6',
  // 'menu-background-gradient': ['#4776e6', '#8e54e9'],
  // // Input
  // 'input-background': BASE_COLORS.white,
  // 'input-background-disabled': '#e4e6e7',
  // 'input-border-color': BASE_COLORS['grey-7'],
  // 'input-color': BASE_COLORS['grey-4'],
  // 'input-placeholder-color': BASE_COLORS['grey-5'],
  // // Typography
  // 'text-caption-color': BASE_COLORS['grey-6'],
  // 'text-color': BASE_COLORS.black,
  // // Divider
  // 'divider-color': BASE_COLORS['grey-t-7']
}

const COMPONENTS = {
  ScreenLoading: {
    gradient: ['#fff', '#fff'],
    backgroundColor: COLORS['loading-screen-background']
  },
  BackgroundGradient: { backgroundColor: COLORS['background-gradient'] },
  Icon: { iconSizes: ICON_SIZES },
  Button: { borderRadiuses: BORDER_RADIUSES },
  Card: {
    backgroundColor: COLORS['card-background'],
    borderRadiuses: BORDER_RADIUSES,
    borderRadius: BORDER_RADIUSES.sm
  },
  Input: {
    color: COLORS['input-color'],
    placeholderColor: COLORS['grey-6'],
    clearColor: COLORS['input-color']
  },
  Container: {
    offset: CONTAINER_OFFSET,
    maxWidth: CONTAINER_MAX_WIDTH,
    scrollWrapper: { width: '100%', height: '100%' },
    scrollContent: { paddingBottom: 60 }
  },
  BottomTabs: {
    variants: {
      sticky: {
        height: 60,
        borderRadius: 0,
        bottomOffset: 0,
        px: 0,
        gradient: COLORS['menu-background-gradient'],
        focusColor: COLORS['menu-focus-color'],
        unFocusColor: COLORS['menu-unfocus-color']
      },
      default: {
        height: 60,
        borderRadius: 16,
        bottomOffset: CONTAINER_OFFSET,
        px: CONTAINER_OFFSET,
        gradient: COLORS['menu-background-gradient'],
        focusColor: COLORS['menu-focus-color'],
        unFocusColor: COLORS['menu-unfocus-color']
      },
      add: {
        height: 60,
        backgroundColor: COLORS.white,
        focusColor: COLORS['primary-default'],
        unFocusColor: COLORS['grey-t-5'],
        addIconColor: COLORS.white,
        addBackgroundColor: COLORS['primary-default'],
        addIconSize: 40,
        shadowColor: 'transparent',
        addIndex: null // middle if not defined
      }
    }
  },
  Typography: {
    color: COLORS['text-color'],
    captionColor: COLORS['text-caption-color'],
    variants: {
      h1: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.h1,
        lineHeight: LINE_HEIGHTS.h1
      },
      h2: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.h2,
        lineHeight: LINE_HEIGHTS.h2
      },
      h3: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.h3,
        lineHeight: LINE_HEIGHTS.h3
      },
      h4: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.h4,
        lineHeight: LINE_HEIGHTS.h4
      },
      h5: {
        fontFamily: FONT_FAMILIES.semibold,
        fontSize: FONT_SIZES.h5,
        lineHeight: LINE_HEIGHTS.h5
      },
      body: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.body,
        lineHeight: LINE_HEIGHTS.body
      },
      callout: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.callout,
        lineHeight: LINE_HEIGHTS.callout
      },
      subhead: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.subhead,
        lineHeight: LINE_HEIGHTS.subhead
      },
      footnote: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.footnote,
        lineHeight: LINE_HEIGHTS.footnote
      },
      caption1: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.caption1,
        lineHeight: LINE_HEIGHTS.caption1
      },
      caption2: {
        fontFamily: FONT_FAMILIES.regular,
        fontSize: FONT_SIZES.caption2,
        lineHeight: LINE_HEIGHTS.caption2
      }
    }
  },
  MenuList: { height: 56 }
}

export const NATIVE_BASE_THEME = {
  components: {
    Input: {
      defaultProps: { size: 'lg', variant: 'default' },
      baseStyle: {
        borderRadius: BORDER_RADIUSES.md,
        fontFamily: FONT_FAMILIES.body
      }
    },
    TextArea: {
      variants: COMPONENTS.Typography.variants,
      defaultProps: { size: 'lg', variant: 'default' },
      baseStyle: {
        borderRadius: BORDER_RADIUSES.md,
        fontFamily: FONT_FAMILIES.body
      }
    },
    Text: {
      variants: COMPONENTS.Typography.variants,
      defaultProps: { color: COMPONENTS.Typography.color, variant: 'body' }
    },
    Heading: {
      defaultProps: { color: COMPONENTS.Typography.color, variant: 'h1' },
      variants: COMPONENTS.Typography.variants
    },
    Container: {
      baseStyle: {
        maxWidth: CONTAINER_MAX_WIDTH,
        alignSelf: 'center',
        w: 'full'
      }
    },
    FormControl: { defaultProps: { mb: 3 } },
    FormControlLabel: { defaultProps: { fontSize: 50 } },
    Divider: { defaultProps: { bg: COLORS['divider-color'] } },
    Badge: { baseStyle: { borderRadius: 12 } },
    Select: { defaultProps: { color: COMPONENTS.Typography.color } }
  },
  colors: COLORS,
  fontWeights: FONT_WEIGHTS
}

export const THEME = {
  COMPONENTS,
  COLORS,
  BORDER_RADIUSES,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  ICON_SIZES,
  LINE_HEIGHTS,
  SHADOWS
}
