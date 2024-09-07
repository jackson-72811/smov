const tokens = {
  black: "#000000",
  white: "#FFFFFF",
  semantic: {
    red: {
      c100: "#F46E6E",
      c200: "#E44F4F",
      c300: "#D74747",
      c400: "#B43434",
    },
    green: {
      c100: "#60D26A",
      c200: "#40B44B",
      c300: "#31A33C",
      c400: "#237A2B",
    },
    silver: {
      c100: "#DEDEDE",
      c200: "#B6CAD7",
      c300: "#8EA3B0",
      c400: "#617A8A",
    },
    yellow: {
      c100: "#FFF599",
      c200: "#FCEC61",
      c300: "#D8C947",
      c400: "#AFA349",
    },
    rose: {
      c100: "#DB3D61",
      c200: "#8A293B",
      c300: "#812435",
      c400: "#701B2B",
    },
  },
  blue: {
    c50: "#ADADF5",
    c100: "#7979CC",
    c200: "#5D5DAE",
    c300: "#3B3B8C",
    c400: "#2A2A71",
    c500: "#1F1F50",
    c600: "#1B1B41",
    c700: "#171736",
    c800: "#101020",
    c900: "#0B0B13",
  },
  purple: {
    c50: "#D5AAFF",
    c100: "#C082FF",
    c200: "#A359EC",
    c300: "#8D44D6",
    c400: "#7831BF",
    c500: "#572887",
    c600: "#411F64",
    c700: "#31184A",
    c800: "#221134",
    c900: "#160B22",
  },
  rainbow: {
    red: "#FF0000",
    orange: "#FF7F00",
    yellow: "#FFFF00",
    green: "#00FF00",
    blue: "#0000FF",
    indigo: "#4B0082",
    violet: "#8B00FF",
  },
  ash: {
    c50: "#7F8D9B",
    c100: "#5B6B7B",
    c200: "#445464",
    c300: "#2B3D4E",
    c400: "#203242",
    c500: "#1C2C3C",
    c600: "#172532",
    c700: "#131E29",
    c800: "#101820",
    c900: "#0C1216",
  },
  shade: {
    c25: "#5d5db3",
    c50: "#676790",
    c100: "#52527A",
    c200: "#3F3F60",
    c300: "#32324F",
    c400: "#272741",
    c500: "#1E1E32",
    c600: "#171728",
    c700: "#131322",
    c800: "#0F0F1B",
    c900: "#0A0A12",
  },
};

export const defaultTheme = {
  extend: {
    colors: {
      themePreview: {
        primary: tokens.blue.c200,
        secondary: tokens.shade.c50,
        ghost: tokens.white,
      },
      
      // Rainbow theme integration
      rainbow: {
        red: tokens.rainbow.red,
        orange: tokens.rainbow.orange,
        yellow: tokens.rainbow.yellow,
        green: tokens.rainbow.green,
        blue: tokens.rainbow.blue,
        indigo: tokens.rainbow.indigo,
        violet: tokens.rainbow.violet,
      },

      // Additional styling based on rainbow colors
      buttons: {
        rainbowPrimary: tokens.rainbow.red,
        rainbowHover: tokens.rainbow.orange,
        rainbowActive: tokens.rainbow.yellow,
        rainbowFocus: tokens.rainbow.green,
        rainbowSecondary: tokens.rainbow.blue,
      },
      
      background: {
        rainbowGradient: `linear-gradient(90deg, ${tokens.rainbow.red}, ${tokens.rainbow.orange}, ${tokens.rainbow.yellow}, ${tokens.rainbow.green}, ${tokens.rainbow.blue}, ${tokens.rainbow.indigo}, ${tokens.rainbow.violet})`,
      },

      progress: {
        rainbowFilled: tokens.rainbow.red,
      },
    },
  },
};
