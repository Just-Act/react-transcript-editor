const theme = {
  fonts: {
    primaryFontBold: "openSans-bold, sans-serif",
    primaryFontBoldItalic: "openSans-BoldItalic, sans-serif",
    primaryFontCondLight: "openSans-CondLight, sans-serif",
    primaryFontCondLightItalic: "openSans-CondLightItalic, sans-serif",
    primaryFontExtraBold: "openSans-ExtraBold, san-serif",
    primaryFontExtraBoldItalic: "openSans-ExtraBoldItalic, sans-serif",
    primaryFontItalic: "openSans-Italic, sans-serif",
    primaryFontLight: "openSans-Light, sans-serif",
    primaryFontLightItalic: "openSans-LightItalic, sans-serif",
    primaryFontRegular: "openSans-Regular, sans-serif",
    primaryFontSemiBold: "openSans-SemiBold, sans-serif",
  },
  breakpoints: {
    xs: "(max-width: 575px)",
    sm_only: "(min-width: 576px) and (max-width: 768px)",
    md_only: "(min-width: 769px) and (max-width: 1024px)",
    lg_only: "(min-width: 1025px) and (max-width: 1199px)",
    xl: "(min-width: 1200px)",

    sm_up: "(min-width: 576px)",
    md_up: "(min-width: 769px)",
    lg_up: "(min-width: 1025px)",
    xl_up: "(min-width: 1200px)",
    xxl_up: "(min-width: 1440px)",

    xs_down: "(max-width: 575px)",
    sm_down: "(max-width: 768px)",
    md_down: "(max-width: 1024px)",
    lg_down: "(max-width: 1199px)",
    xl_down: "(max-width: 1200px)",
    xxl_down: "(max-width: 1439px)",

    //material breakpoints
    mat_md_down: "(max-width: 960px)",
    mat_sm_only: "(min-width: 575px) and (max-width: 960px)",
    mat_md_only: "(min-width: 960px) and (max-width: 1024px)",
    mat_xs_down: "(max-width: 600px)",
  },
};

export default theme;
