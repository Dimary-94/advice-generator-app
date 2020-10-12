// #region Global Imports
import 'styled-components';
import { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme';

import * as React from 'react';

// #endregion Global Imports

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'styled-components' {
  interface DefaultTheme extends MuiTheme {}
}
