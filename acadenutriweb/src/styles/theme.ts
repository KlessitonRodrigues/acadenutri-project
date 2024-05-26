import { atlassianColors as acolors, materialColors as mcolors } from './colors';
import { cssSize } from './utils';

export const customColors = {
  color1: '#04A118',
  color2: '#02440A',
  color3: '#006838',
  color4: '#96CF24',
  color5: '#012F07',
  color6: '#59A52C',
  color7: '#FFC281',
  color8: '#9E5D1B',
  color9: '#BDC3C7',
  color10: '#5F6870',
  color11: '#F6D364',
  color12: '#D69606',
};

export const gradients = {
  green: `linear-gradient(95deg, ${customColors.color3}, ${customColors.color4})`,
  greenReverse: `linear-gradient(95deg, ${customColors.color4}, ${customColors.color3})`,
  darkGreen: `linear-gradient(95deg, ${customColors.color5}, ${customColors.color6})`,
  bronze: `linear-gradient(95deg, ${customColors.color7}, ${customColors.color8})`,
  silver: `linear-gradient(95deg, ${customColors.color9}, ${customColors.color10})`,
  gold: `linear-gradient(95deg, ${customColors.color11}, ${customColors.color12})`,
};

export const defaultTheme: Styles.Theme = {
  colors: {
    main: customColors.color1,
    mainBg: customColors.color2,
    mainText: mcolors.grey['300'],
    bg1: mcolors.grey['50'],
    bg2: mcolors.grey['100'],
    bg3: mcolors.grey['200'],
    bg4: mcolors.grey['300'],
    text1: mcolors.grey['800'],
    text2: mcolors.grey['700'],
    text3: mcolors.grey['600'],
    text4: mcolors.grey['500'],
    gray: mcolors.grey['500'],
    yellow: acolors.yellow['600'],
    red: acolors.red['800'],
    blue: acolors.blue['500'],
    green: mcolors.lightGreen['800'],
    white: mcolors.grey['50'],
    black: mcolors.black,
  },
  fontSize: {
    h1: '1.5rem',
    h2: '1.35rem',
    h3: '1.25rem',
    h4: '1.15rem',
    h5: '1.1rem',
    h6: '1rem',
    body: '1rem',
    small: '0.95rem',
    verySmall: '0.9rem',
    label: '0.95rem',
  },
  shadow: {
    large: '0 1px 7px 0 #0007',
    medium: '0 1px 5px 0 #0005',
    small: '0 1px 3px 0 #0003',
  },
  border: {
    large: 'solid 2px ' + customColors.color2,
    medium: `solid 1px ${customColors.color2}cc`,
    small: `solid 1px ${customColors.color2}66`,
  },
  radius: {
    full: '50%',
    large: cssSize(5),
    medium: cssSize(4),
    small: cssSize(3),
  },
};

export const defaultThemeDark = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    bg1: mcolors.black,
    bg2: mcolors.grey['900'],
    bg3: mcolors.grey['800'],
    bg4: mcolors.grey['700'],
    text1: mcolors.grey['300'],
    text2: mcolors.grey['400'],
    text3: mcolors.grey['500'],
    text4: mcolors.grey['600'],
    gray: mcolors.grey['600'],
    white: mcolors.grey['300'],
  },
  border: {
    large: `solid 1px ${mcolors.grey['500']}`,
    medium: `solid 1px ${mcolors.grey['600']}`,
    small: `solid 1px ${mcolors.grey['700']}`,
  },
};
