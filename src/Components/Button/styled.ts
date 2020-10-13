import { Button as MuiButton } from '@material-ui/core';
import styled from 'styled-components';
import { ButtonProps } from '@material-ui/core';

export const Button = styled(MuiButton)<ButtonProps>`
  && {
    height: 38px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: #333;
    outline: none;
    font-size: 0.85em;
    padding: 8px 18px 6px 18px;
    margin-top: 30px;
    float: right;
    cursor: pointer;

    &&:hover {
      background: grey;
    }
  }
`;
