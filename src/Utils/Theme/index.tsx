import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// #endregion Global Imports

const breakPointsSettings = {
  xs: 0,
  sm: 37.5,
  md: 60,
  lg: 80,
  xl: 120,
};

const theme = createMuiTheme({
  breakpoints: {
    values: { ...breakPointsSettings },
  },
});

export { theme };
