import * as fonts from "../constants/fonts";

const round = (x, n) => Math.round(x * (n * 10)) / (n * 10);
const scaleN = n => round(Math.pow(1.2, n), 3);
const scale = n => `${scaleN(n)}rem`;

const brandColor = "#70A076";
const accentColors = ["#D2AB65", "#D1DFD2", "red"];
const dark = ["#333E49", "#484848", "#747474", "#B9C2CE"];
const lightColors = ["#FFFFFF", "#F6F6F8", "#EFEFEF", "#D7D7D7"];

const colors = {
  brand: brandColor,
  accentColors,
  white: "#FFFFFF",
  black: dark[1],
  dark,
  lightColors
};

const settings = {
  headerHeight: 84
};

const theme = {
  scale,
  scaleN,
  colors,
  fonts,
  color: colors.black,
  bg: colors.lightColors[0],
  padding: `${settings.headerHeight}px 0 0 0`,
  margin: "0 auto",
  maxWidth: "71.25rem",
  borderRadius: "0.2rem",
  lineHeight: 1.8,
  focus: {
    border: "0.4rem red solid"
  },
  p: {
    fontSize: scale(1.25),
    lineHeight: 1.58
  },
  a: {
    color: {
      dark: colors.white,
      light: colors.black
    },
    textDecoration: "none",
    hover: {
      color: colors.brand
    }
  },
  header: {
    height: settings.headerHeight,
    title: {
      fontSize: scale(3),
      textAlign: "left",
      padding: `${scale(0)} 0 0 0`,
      margin: `0 0 ${scale(6)} 0`,
      lineHeight: scaleN(0)
    },
    subTitle: {
      fontSize: `${scale(0)}`,
      padding: `${scale(-4)} 0 0 0`,
      margin: `${scale(-20)} 0 0 0`,
      lineHeight: scaleN(-1)
    },
    isHome: {
      title: {
        fontSize: scale(7),
        textAlign: "center",
        padding: `${scale(2)} 0 0 0`,
        margin: `${scale(0)} 0 ${scale(4)} 0`,
        lineHeight: scaleN(0)
      },
      subTitle: {
        fontSize: `${scale(0)}`,
        padding: `${scale(-4)} 0 0 0`,
        margin: `0`,
        lineHeight: scaleN(-1)
      }
    }
  },
  menu: {
    mobile: {
      padding: `${scale(3)} ${scale(3)}`,
      opened: {
        bg: colors.dark[0]
      },
      closed: {
        bg: "transparent"
      },
      label: {
        width: scale(3),
        height: scale(3),
        fontSize: scale(3.2)
      },
      a: {
        fontFamily: fonts.Orator,
        fontSize: scale(1.5),
        padding: `0 0 ${scale(1)}`,
        textAlign: "left",
        color: {
          dark: colors.white,
          light: colors.black
        },
        active: {
          color: {
            dark: colors.brand,
            light: colors.brand
          }
        },
        hover: {
          color: {
            dark: colors.brand,
            light: colors.brand
          }
        }
      },
      ul: {
        margin: `${scale(0.2)} 0 0 ${scale(0.2)}`
      }
    },
    desktop: {
      padding: `${scale(2.8)} 0`,
      bg: "transparent",
      a: {
        fontFamily: fonts.Orator,
        fontSize: scale(0.6),
        fontWeight: 400,
        padding: `${scale(1)} ${scale(-0.4)}`,
        textAlign: "left",
        color: {
          dark: colors.white,
          light: colors.black
        },
        active: {
          color: {
            dark: colors.brand,
            light: colors.brand
          }
        },
        hover: {
          color: {
            dark: colors.brand,
            light: colors.brand
          }
        }
      },
      ul: {
        margin: `0 ${scale(1)} 0 auto`
      }
    }
  },
  socialLinks: {
    margin: `0`,
    padding: 0,
    a: {
      color: colors.black,
      fontSize: scale(2.5),
      margin: `0 0 ${scale(0)}`,
      padding: `0`,
      hover: {
        color: colors.brand
      }
    }
  },
  welcome: {
    marginTop: scale(6),
    marginBottom: scale(2)
  },
  h1: {
    fontSize: scale(5.8),
    margin: 0,
    padding: `${scale(8)} 0 0 0`
  },
  h2: {
    fontSize: scale(8.4),
    margin: 0,
    padding: `${scale(6)} 0 0 0`
  },
  h3: {
    fontSize: scale(1),
    margin: 0,
    padding: `${scale(6)} 0 0 0`
  },
  h4: {
    fontSize: scale(0.4),
    margin: 0,
    padding: `${scale(6)} 0 0 0`
  },
  h5: {
    fontSize: scale(0.2),
    margin: 0,
    padding: `${scale(4)} 0 0 0`
  },
  h6: {
    fontSize: scale(0),
    margin: 0,
    padding: `${scale(4)} 0 0 0`
  },
  blog: {
    author: {
      fontFamily: fonts.System,
      fontSize: scale(-0.7),
      lineHeight: scaleN(2),
      time: {
        color: colors.dark[2]
      }
    },
    list: {
      margin: `0 0 ${scale(4)} 0`,
      header: {
        fontSize: scale(6),
        padding: `${scale(1)} 0 0 0`,
        margin: `${scale(4)} 0 0 0`
      },
      ul: {
        padding: `0`,
        margin: `0`
      },
      item: {
        border: "1px solid rgba(0,0,0,.125);",
        padding: scale(1.2),
        hover: {
          backgroundColor: colors.dark[0]
        },
        title: {
          fontFamily: fonts.SansSerif,
          fontSize: scale(1.2),
          lineHeight: scaleN(1),
          margin: `0 0 ${scale(-0.8)}`,
          color: colors.dark[0],
          hover: {
            color: colors.dark[2]
          }
        },
        text: {
          fontFamily: fonts.System,
          fontSize: scale(-0.3),
          color: colors.dark[2],
          lineHeight: scaleN(2),
          padding: `0`,
          margin: `0`
        }
      }
    },
    post: {
      padding: "20px",
      margin: `${scale(4)} auto 0`,
      maxWidth: "46.25rem",
      header: {
        fontFamily: fonts.SansSerif,
        fontSize: "2.6rem",
        margin: `0 0 ${scale(4)}`
      },
      content: {
        fontFamily: fonts.Serif,
        code: {
          color: colors.white,
          fontSize: scale(1),
          borderRadius: "0.2rem",
          margin: `0`,
          padding: `${scale(-8)} ${scale(-4)}`,
          backgroundColor: colors.dark[0]
        },
        highlight: {
          backgroundColor: null,
          borderRadius: "0.2rem",
          margin: `${scale(0)} -50rem`,
          padding: `0 50rem`,
          code: {
            color: colors.white
          }
        },
        a: {
          color: colors.brand
        },
        p: {
          fontSize: scale(1),
          margin: 0,
          padding: `2rem 0 0 0`
        },
        ul: {
          fontSize: scale(1),
          margin: 0,
          padding: `${scale(0)}`
        }
      }
    }
  },
  page: {
    padding: "20px",
    margin: `${scale(0)} auto ${scale(4)}`,
    maxWidth: "60rem",
    header: {
      fontFamily: fonts.SansSerif,
      fontSize: "2.4rem",
      margin: `0 0 ${scale(2)}`
    },
    content: {
      fontFamily: fonts.Serif,
      p: {
        fontSize: scale(1),
        margin: 0,
        padding: `2rem 0 0 0`
      }
    }
  },
  i18n: {
    selectLanguage: {
      padding: `${scale(3.0)} ${scale(-2)}`,
      li: {
        margin: `0 0 0 5px`,
        fontFamily: fonts.Orator,
        fontSize: scale(-0.7),
        fontWeight: 400,
        padding: `${scale(1)} ${scale(-4.2)}`,
        borderRadius: "0.2rem",
        selected: {
          backgroundColor: colors.lightGreen
        }
      }
    }
  }
};

export default theme;
