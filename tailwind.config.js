/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-contrast": "#fff",
        orange: "#f99a0e",
        gray: {
          "100": "#8e8e94",
          "200": "rgba(0, 0, 0, 0.23)",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(255, 255, 255, 0.2)",
        },
        whitesmoke: "#eaeaea",
        darkorange: "#dc880b",
        peru: "#9e6104",
        slategray: "#576074",
        darkslategray: {
          "100": "#434343",
          "200": "#424242",
          "300": "#303030",
        },
        cornflowerblue: {
          "100": "#1262af",
          "200": "#1262ae",
        },
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(226, 226, 226, 0.1)",
        },
        lavender: {
          "100": "#cdddec",
          "200": "#ccdcec",
        },
        darkgray: "#999",
        lightgray: "#cecece",
        black: "#000",
        chocolate: "#eb7524",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        silver: "#bdbdbd",
        dimgray: "#616161",
      },
      spacing: {},
      fontFamily: {
        "components-button-large": "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
      },
      borderRadius: {
        "12xl": "31px",
        "3xs": "10px",
        "45xl": "64px",
        "19xl": "38px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      mini: "15px",
      "11xl": "30px",
      "3xl": "22px",
      "13xl": "32px",
      "19xl": "38px",
      "5xl": "24px",
      smi: "13px",
      xs: "12px",
      "42xl": "61px",
      "23xl": "42px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "1100px",
      },
      sm: {
        max: "650px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
