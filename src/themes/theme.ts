import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Inter",
    heading: "Inter",
  },
  textStyles: {
    display1: {
      fontSize: "70px",
      fontWeight: "medium",
      lineHeight: "1.150em",
    },
    display2: {
      fontSize: "52px",
      fontWeight: "medium",
      lineHeight: "1.192em",
    },
    display3: {
      fontSize: "44px",
      fontWeight: "medium",
      lineHeight: "1.182em",
    },
    display4: {
      fontSize: "32px",
      fontWeight: "medium",
      lineHeight: "1.375",
    },
    display5: {
      fontSize: "26px",
      fontWeight: "medium",
      lineHeight: "1.462em",
    },
    heading1: {
      fontSize: "54px",
      fontWeight: "medium",
      lineHeight: "1.222em",
    },
    heading2: {
      fontSize: "36px",
      fontWeight: "medium",
      lineHeight: "1.333em",
    },
    heading3: {
      fontSize: "26px",
      fontWeight: "medium",
      lineHeight: "1.308em",
    },
    heading4: {
      fontSize: "22px",
      fontWeight: "medium",
      lineHeight: "1.273em",
    },
    heading5: {
      fontSize: "18px",
      fontWeight: "medium",
      lineHeight: "1.333em",
    },
    heading6: {
      fontSize: "16px",
      fontWeight: "medium",
      lineHeight: "1.375em",
    },
  },
  components: {
    Button: {
      variants: {
        small: {
          padding: "18px 24px",
          fontSize: "16px",
          lineHeight: "1.125em",
          borderWidth: "1px",
          borderRadius: "16px 0px",
          fontWeight: "500",
          textAlign: "center",
          textDecoration: "none",
        },
        medium: {
          padding: "24px 38px",
          fontSize: "18px",
          lineHeight: "1.111em",
          fontWeight: "500",
          textAlign: "center",
          borderWidth: "1px",
          borderRadius: "16px 0px",
          textDecoration: "none",
          color:'#ffffff',
          backgroundColor: "#191A17", // Adicione esta linha para a cor de fundo
          _hover: {
            backgroundColor: "#95D477", // Adicione esta linha para a cor de hover
          },
         
        },
        large: {
          padding: "26px 56px",
          fontSize: "20px",
          lineHeight: "1.1em",
          textAlign: "center",
          borderWidth: "1px",
          borderRadius: "16px 0px",
          textDecoration: "none",
          fontWeight: "500",
          color:'#ffffff',
          backgroundColor: "#191A17", // Adicione esta linha para a cor de fundo
          _hover: {
            backgroundColor: "#95D477", // Adicione esta linha para a cor de hover
          },
        },
      },
    },
  },
  
  styles: {
    global: {
        colors: {
            primary1: "#95D477",
            primary2: "#f3a777",
            primaryWhite1: "#FFFAF6",
            neutral800: "#191A17",
            neutral700: "#353731",
            neutral600: "#5E6159",
            neutral500: "#8F9488",
            neutral400: "#DEE7DC",
            neutral300: "#EFF4ED",
            neutral200: "#F5FBF4",
            neutral100: "#FFFFFF",
             blue200: "#267b82",
            blue100: "#39b7b4",
            green400: "#11845B",
            green300: "#05C168",
            green200: "#7FDCA4",
            green100: "#DEF2E6",
            red400: "#DC2B2B",
            red300: "#FF5A65",
            red200: "#ef7b73",
            red100: "#FFEFF0",
            orange100: "#D5691B",
            orange200: "#f7ecdf",
            
          },
      body: {
        maxWidth: "100vw",
        height: "100vh",
        overflowX: "hidden",
        fontSynthesis: "none",
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        WebkitTextSizeAdjust: "100%",
      },
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
    },
  },
});

export default theme;
