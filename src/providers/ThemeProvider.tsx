'use client';

import { createTheming } from '@callstack/react-theme-provider';

export const wlTheme = {
  color: {
    primary: '#192d55',
    secondary: '#1765ff',
    text: '#192d55',
    disabled: '#6879a1',
    background: '#d7cdf6',
    backgroundLight: '#e0d8f6',
    backgroundDark: '#c5b9eb',
    success: '#e2ffa9',
    successText: '#b3ff7f',
    error: '#f776a1',
    errorText: '#ff1768',
    white: '#f6f3ff',
    black: '#192d55',
  },
  font: {
    base: '20px',
    small: '0.707rem',
    heading: {
      h1: '3.815rem',
      h2: '3.052rem',
      h3: '2.441rem',
      h4: '1.953rem',
      h5: '1.563rem',
      h6: '1.25rem',
    },
  },
  radii: {
    base: '0.6rem',
    small: '0.3rem',
    large: '1.2rem',
  },
};

export type Theme = { theme: typeof wlTheme };

const { ThemeProvider, withTheme, useTheme } = createTheming(wlTheme);

export {
  ThemeProvider, useTheme, withTheme, 
};
