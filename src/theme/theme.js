import { defaultTheme } from "@useui/react";

// BREAKPOINTS (MIN WIDTH)...
const BP = {
  ...defaultTheme.BP,
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};
// SPACING SIZES ...
const SIZE = {
  ...defaultTheme.SIZE,
  base: 8, // 8 px
};

// COLORS ...
const BRAND_COLORS = {
  brand1: "#4dabf5",
  brand2: "#1769aa",
  brand2ContrastText: "white",
  coral: "coral",
  brand3Light: "#f73378",
  brand3Dark: "green=>darken()",
  //
  yellow: "rgb(255 255 0)",
  red: "rgb(255 0 0)",
  orange: "rgb(255 165 0)",
  green: "green",
  white: "#ededed",
  black: "rgba(0, 0, 0, 1)",
  // egggradients
  orangeBasicIncome: "#ff928b",
  orangeBasicIncome2: "#ffac81",
  blueAdeleFirstLove: "#009ffd",
  blueAdeleFirstLove2: "#2a2a72",
};
const COLOR = {
  ...defaultTheme.COLOR,
  ...BRAND_COLORS,
  primary: BRAND_COLORS.orangeBasicIncome,
  // primaryLight: BRAND_COLORS.brand1,
  // primaryDark: BRAND_COLORS.brand2,
  primaryContrastText: BRAND_COLORS.brand2ContrastText,
  //
  secondary: BRAND_COLORS.blueAdeleFirstLove2,
  // secondaryLight: BRAND_COLORS.brand3Light,
  // secondaryDark: BRAND_COLORS.brand3Dark,
  secondaryContrastText: BRAND_COLORS.white,

  success: BRAND_COLORS.green,
  warning: BRAND_COLORS.red,
};

// FONT FAMILIES ...
const FONT = {
  ...defaultTheme.FONT,
  fonts: ["Arial, serif", "Avenir, serif", '"Roboto", "Helvetica", "Arial", sans-serif'],
};

// TEXT SIZES ...
const TEXT = {
  ...defaultTheme.TEXT,
  xs: "10px",
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
  options: {
    ...defaultTheme.TEXT.options,
    convertToRem: true,
  },
};

// TYPOGRAPHY STYLES ...
const TYPO = {
  ...defaultTheme.TYPO,
  mainNavItem: {
    fontFamily: 2,
    fontSize: "md",
    fontWeight: "400",
    textDecoration: "underline",
    textUnderlineOffset: "0.2em",
    // textTransform: "uppercase",
  },
  mainNavMobileItem: {
    fontFamily: 3,
    fontSize: "2xl",
    fontWeight: "700",
    textTransform: "capitalize",
    textDecoration: "underline",
  },
  button: {
    fontFamily: 2,
    fontSize: "sm",
    fontWeight: "700",
    textTransform: "uppercase",
    //
    // from material UI button
    lineHeight: "1",
    letterSpacing: "0.02857em",
    // transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    // fontFamily: ,
  },
  badge: {
    fontFamily: 2,
    fontSize: "xs",
    fontWeight: "100",
    textTransform: "uppercase",
  },
  heading1: {
    fontFamily: 2,
    fontSize: "2xl",
    fontWeight: "700",
    lineHeight: "1.2",
    // textTransform: "uppercase",
  },
  heading2: {
    fontFamily: 2,
    fontSize: "xl",
    fontWeight: "800",
    // textTransform: "uppercase",
  },
  heading3: {
    fontFamily: 2,
    fontSize: "lg",
    fontWeight: "700",
    // textTransform: "uppercase",
  },
  heading4: {
    fontFamily: 2,
    fontSize: "md",
    fontWeight: "700",
    // textTransform: "uppercase",
  },
  heading5: {
    fontFamily: 2,
    fontSize: "sm",
    fontWeight: "700",
    // textTransform: "uppercase",
  },
  heading6: {
    fontFamily: 2,
    fontSize: "xs",
    fontWeight: "700",
    // textTransform: "uppercase",
  },
  body: {
    fontFamily: 2,
    fontSize: "md",
    fontWeight: "100",
  },
};

const TRANSITION = {
  ...defaultTheme.TRANSITION,
  transitionDuration: {
    SHORT: 400,
  },
  transitionTimingFunction: {
    ONE: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

// SPECIAL CSS-SNIPPET FOR CONSISTENT UI ...
const PRESETS = {
  ...defaultTheme.PRESETS,
  rounded: {
    borderRadius: 1,
    overflow: "hidden",
  },
  boxShadow: {
    boxShadow: "0vh 0vh 10px 0px rgba(0,0,0,0.35)",
  },
  textBorderWhite: {
    textShadow: "-1px -1px #fff, 1px -1px #fff, -1px 1px #fff, 1px 1px #fff",
  },
  textBorderBlack: {
    textShadow: "-1px -1px #000, 1px -1px #000, -1px 1px #000, 1px 1px #000",
  },
  transition_Buttons: {
    transitionDuration: "SHORT",
    transitionTimingFunction: "ONE",
  },
};

const theme = {
  ...defaultTheme,
  BP,
  SIZE,
  COLOR,
  FONT,
  TEXT,
  TYPO,
  PRESETS,
  TRANSITION,
};
export default theme;
