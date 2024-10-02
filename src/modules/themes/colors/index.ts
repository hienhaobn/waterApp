import {CommonColors, DarkTheme, LightTheme} from './colors';

export enum ThemeColor {
  Light = 'light',
  Dark = 'dark',
}

const Colors = {
  ...CommonColors,
  light: {
    ...LightTheme,
  },
  dark: {
    ...DarkTheme,
  },
};

export default Colors;
