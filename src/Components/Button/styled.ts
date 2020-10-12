import { Button as MuiButton } from '@material-ui/core';
import styled from 'styled-components';
import { ButtonProps } from '@material-ui/core';

export const Button = styled(MuiButton)<ButtonProps>`
  && {
    color: white;
    background-color: blue;
  }
`;
